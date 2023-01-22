const express = require("express");
const app = express();
const http = require("http").createServer(app);

var mysql = require("mysql");

var dbConnection = mysql.createConnection({
    "host": "localhost",
    "port": "8889",
    "user": "root",
    "password": "root",
    "database": "monitor_user_activity"
});

dbConnection.connect(function (error) {
    // console.log(error);

    if (error == null) {
        dbConnection.query(`CREATE TABLE IF NOT EXISTS chat_users (
            id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            browserInfo TEXT NOT NULL,
            country TEXT NOT NULL,
            ipAddress TEXT NOT NULL,
            userSocketId TEXT NOT NULL,
            accessToken TEXT NOT NULL,
            current_path TEXT NOT NULL,
            current_path_title TEXT NOT NULL,
            referrer TEXT NOT NULL,
            created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
            )`, function (error, result) {
                console.log(error);
            });

        dbConnection.query(`CREATE TABLE IF NOT EXISTS chat_user_messages (
            id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
            sender INTEGER NOT NULL,
            receiver INTEGER NOT NULL,
            message TEXT NOT NULL,
            created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
            )`, function (error, result) {
                console.log(error);
            });
    }
});

var jwt = require("jsonwebtoken");
var accessTokenSecret = "myAccessTokenSecret1234567890";

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

var formidable = require("express-formidable");
app.use(formidable());

app.post("/get-all-chat-users", function (request, result) {
    const adminId = request.fields.adminId;
    if (adminId == 565) {
        dbConnection.query("SELECT * FROM chat_users ORDER BY updated_at ASC", function (error, queryResult) {

            for (var a = 0; a < queryResult.length; a++) {
                queryResult[a].socketID = queryResult[a].userSocketId;
                queryResult[a].title = queryResult[a].current_path_title;
                queryResult[a].path = queryResult[a].current_path;
            }

            result.json(queryResult);
        });
    } else {
        result.json([]);
    }
});

app.post("/get-user", function (request, result) {
    const accessToken = request.fields.accessToken;

    dbConnection.query("SELECT * FROM chat_users WHERE accessToken = '" + accessToken + "'", function (error, queryResult) {
        result.json(queryResult);
    });
});

app.post("/get-users-chat", function (request, result) {
    const adminId = request.fields.adminId;
    const email = request.fields.email;

    if (adminId == 565) {
        dbConnection.query("SELECT * FROM chat_users WHERE email = '" + email + "'", function (error, queryResult) {

            if (queryResult.length > 0) {

                const chatUserId = queryResult[0].id;

                dbConnection.query("SELECT * FROM chat_user_messages WHERE sender = '" + chatUserId + "' OR receiver = '" + chatUserId + "'", function (error, queryResult) {
                    for (var a = 0; a < queryResult.length; a++) {
                        queryResult[a].createdAt = queryResult[a].created_at;
                        queryResult[a].me = (queryResult[a].receiver == chatUserId);
                    }
                    result.json(queryResult);
                });
            } else {
                result.json([]);
            }
        });
    } else {
        result.json([]);
    }
});

app.post("/get-chat-with-admin", function (request, result) {
    const accessToken = request.fields.accessToken;

    dbConnection.query("SELECT * FROM chat_users WHERE accessToken = '" + accessToken + "'", function (error, queryResult) {

        if (queryResult.length > 0) {

            const chatUserId = queryResult[0].id;

            dbConnection.query("SELECT * FROM chat_user_messages WHERE sender = '" + chatUserId + "' OR receiver = '" + chatUserId + "' ORDER BY id ASC", function (error, queryResult) {

                for (var a = 0; a < queryResult.length; a++) {
                    queryResult[a].createdAt = queryResult[a].created_at;
                    queryResult[a].me = (queryResult[a].sender == chatUserId);
                }

                result.json(queryResult);
            });
        } else {
            result.json([]);
        }

    });
});

const socketIO = require("socket.io")(http, {
    cors: {
        origin: "*"
    }
});

http.listen(3000, function () {
    console.log("Server started.");

    var adminSocketId = 0;

    socketIO.on("connection", function (socket) {
        console.log("User connected: " + socket.id);

        socket.on("admin_joined", function (data) {
            adminSocketId = socket.id;
            socket.emit("admin_joined", socket.id);
        });

        socket.on("user_new_message", function (data) {

            // do your admin validation here
            // dbConnection.query("SELECT * FROM admins WHERE id = '" + data.adminId + "'", function (error, result) {
                // if (result.length > 0) {

                    // get user using email
                    dbConnection.query("SELECT * FROM chat_users WHERE email = '" + data.email + "'", function (error, result) {
                        if (result.length > 0) {

                            const socketID = result[0].userSocketId;

                            dbConnection.query("INSERT INTO chat_user_messages (sender, receiver, message, created_at) VALUES (0, '" + result[0].id + "', '" + data.message + "', NOW())", function (error, result) {

                                delete data.adminId;
                                socketIO.to(socketID).emit("user_new_message", data);
                            });
                        }
                    });

                // }
            // });
        });

        socket.on("new_message", function (data) {
            dbConnection.query("SELECT * FROM chat_users WHERE accessToken = '" + data.accessToken + "'", function (error, result) {
                if (result.length > 0) {

                    data.socketID = socket.id;
                    data.email = result[0].email;
                    socketIO.to(adminSocketId).emit("new_message", data);

                    dbConnection.query("INSERT INTO chat_user_messages (sender, receiver, message, created_at) VALUES ('" + result[0].id + "', 0, '" + data.message + "', NOW())", function (error, result) {
                        console.log(result.insertId);
                    });
                }
            });
        });

        socket.on("user_joined", function (data) {
            // console.log(data);

            dbConnection.query("SELECT * FROM chat_users WHERE email = '" + data.email + "'", function (error, result) {

                var accessToken = jwt.sign({ email: data.email }, accessTokenSecret);

                if (result.length == 0) {

                    const sql = "INSERT INTO chat_users (name, email, browserInfo, country, ipAddress, userSocketId, accessToken, current_path, current_path_title, referrer, created_at, updated_at) VALUES ('" + data.name + "', '" + data.email + "',  '" + data.browserInfo + "', '" + data.country + "', '" + data.ipAddress + "', '" + socket.id + "', '" + accessToken + "', '" + data.path + "', '" + data.title + "', '" + data.referrer + "', NOW(), NOW())";

                    dbConnection.query(sql, function (error, result) {
                        // console.log(result.insertId);

                        data.socketID = socket.id;
                        data.chat_user_id = result.insertId;
                        socketIO.to(adminSocketId).emit("user_joined", data);

                        socket.emit("user_joined", accessToken);
                    });
                } else {

                    const userId = result[0].id;

                    dbConnection.query("UPDATE chat_users SET userSocketId = '" + socket.id + "', accessToken = '" + accessToken + "', current_path = '" + data.path + "', current_path_title = '" + data.title + "', referrer = '" + data.referrer + "', updated_at = NOW() WHERE id = '" + userId + "'", function (error, result) {
                        console.log(adminSocketId);

                        data.socketID = socket.id;
                        data.chat_user_id = userId;
                        socketIO.to(adminSocketId).emit("user_joined", data);

                        socket.emit("user_joined", accessToken);
                    });
                }
            });
        });
    });
});