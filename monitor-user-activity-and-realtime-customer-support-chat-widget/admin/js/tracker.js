var tracker = {

    socketIO: null,
    adminSocketId: 0,
    nodeServerUrl: "http://127.0.0.1:3000",

    users: [],
    userObj: null,
    audio: null,

    init: function () {
        const self = this;

        this.socketIO = io(this.nodeServerUrl);
        this.audio = new Audio("new-message.mp3");

        this.socketIO.on("admin_joined", function (data) {
            self.adminSocketId = data;
            // console.log(data);
        });
        this.socketIO.emit("admin_joined", "1");

        var ajax = new XMLHttpRequest();
        ajax.open("POST", this.nodeServerUrl + "/get-all-chat-users", true);

        ajax.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    var data = JSON.parse(this.responseText);
                    // console.log(data);

                    for (var a = 0; a < data.length; a++) {
                        self.renderUser(data[a]);
                    }
                }

                if (this.status == 500) {
                    console.log(this.responseText);
                }
            }
        };

        var formData = new FormData();
        formData.append("adminId", document.getElementById("admin-id").value);
        ajax.send(formData);

        this.socketIO.on("user_joined", function (data) {
            self.renderUser(data);
        });

        this.socketIO.on("new_message", function (data) {
            var userObj = null;
            for (var a = 0; a < self.users.length; a++) {
                if (self.users[a].email == data.email) {
                    userObj = self.users[a];

                    self.users[a].messages.push({
                        "me": false,
                        "message": data.message,
                        "createdAt": new Date().getTime()
                    });
                    break;
                }
            }

            if (userObj != null) {
                $("#socket-id-" + data.socketID).notify(
                    data.message,
                    "success"
                );

                self.audio.play();

                // render in modal if currently visible
                self.renderMessage(data);
            }
        });
    },

    showChat: function(self) {
        const selfObj = this;
        var ipAddress = self.getAttribute("data-ip-address");
        var email = self.getAttribute("data-email");

        this.userObj = null;
        for (var a = 0; a < this.users.length; a++) {
            if (this.users[a].email == email) {
                this.userObj = this.users[a];
                break;
            }
        }

        if (this.userObj == null) {
            alert("User does not exists.");
            return false;
        }

        $("#customerSupportChatModal .modal-body").html("Loading...");

        // show messages from database
        var ajax = new XMLHttpRequest();
        ajax.open("POST", this.nodeServerUrl + "/get-users-chat", true);

        ajax.onreadystatechange = function () {
            if (this.readyState == 4) {
                if (this.status == 200) {
                    var data = JSON.parse(this.responseText);

                    $("#customerSupportChatModal .modal-body").empty();

                    for (var a = 0; a < data.length; a++) {
                        selfObj.renderMessage(data[a]);
                    }
                }

                if (this.status == 500) {
                    console.log(this.responseText);
                }
            }
        };

        var formData = new FormData();
        formData.append("adminId", document.getElementById("admin-id").value);
        formData.append("email", this.userObj.email);
        ajax.send(formData);

        $("#customerSupportChatModal").modal("show");
    },

    renderMessage: function (message) {
        var html = "";
        if (message.me) {
            html += `<p class='text-right'>` + message.message + `</p>`;
        } else {
            html += `<p class='text-left'>` + message.message + `</p>`;
        }
        $("#customerSupportChatModal .modal-body").append(html);
    },

    sendMessage: function (form) {
        this.socketIO.emit("user_new_message", {
            "message": form.message.value,
            "socketID": this.userObj.userSocketId,
            "email": this.userObj.email,
            "createdAt": new Date().getTime(),
            "adminId": document.getElementById("admin-id").value
        });

        for (var a = 0; a < this.users.length; a++) {
            if (this.users[a].email == this.userObj.email) {
                this.users[a].messages.push({
                    "me": true,
                    "message": form.message.value,
                    "createdAt": new Date().getTime()
                });
                break;
            }
        }

        const dateObj = new Date();
        var createdAt = dateObj.getHours() + ":" + dateObj.getMinutes() + ":" + dateObj.getMinutes();

        this.renderMessage({
            "me": true,
            "message": form.message.value,
            "createdAt": createdAt
        });

        form.message.value = "";
        return false;
    },

    showHistory: function(self) {
        var ipAddress = self.getAttribute("data-ip-address");
        var email = self.getAttribute("data-email");

        this.userObj = null;
        for (var a = 0; a < this.users.length; a++) {
            if (this.users[a].email == email) {
                this.userObj = this.users[a];
                break;
            }
        }

        if (this.userObj == null) {
            alert("User does not exists.");
            return false;
        }

        var history = this.userObj.history.reverse();
        var html = "";
        for (var a = 0; a < history.length; a++) {
            html += `<tr>
            <td>` + this.userObj.ipAddress + `</td>
            <td><a href='` + history[a].referrer + `'>` + history[a].referrer + `</a></td>
            <td><a href='` + history[a].path + `'>` + history[a].title + `</a></td>
            </tr>`;
        }
        $("#historyModal .modal-body tbody").html(html);

        $("#historyModal").modal("show");
    },

    renderUser: function (data) {
        const self = this;

        // push in users array if not exists
        var flag = false;
        var userSocketId = data.socketID;
        for (var a = 0; a < self.users.length; a++) {
            if (self.users[a].email == data.email) {
                flag = true;

                self.users[a].history.push({
                    "path": data.path,
                    "title": data.title,
                    "referrer": data.referrer
                });

                self.users[a].path = data.path;
                self.users[a].title = data.title;
                self.users[a].referrer = data.referrer;
                userSocketId = self.users[a].userSocketId;

                break;
            }
        }

        if (!flag) {
            // push in users array
            self.users.push({
                "title": data.title,
                "path": data.path,
                "referrer": data.referrer,
                "ipAddress": data.ipAddress,
                "country": data.country,
                "userSocketId": userSocketId,
                "browserInfo": data.browserInfo,
                "history": [{
                    "title": data.title,
                    "path": data.path,
                    "referrer": data.referrer
                }],
                "name": data.name,
                "email": data.email,
                "chat_user_id": data.id,
                "messages": []
            });
        }

        // prepend it in history if current being viewed by admin
        if (self.userObj != null) {
            if (self.userObj.email == data.email) {
                var html = "";
                html += `<tr>
                <td>` + self.userObj.ipAddress + `</td>
                <td><a href='` + data.referrer + `'>` + data.referrer + `</a></td>
                <td><a href='` + data.path + `'>` + data.title + `</a></td>
                </tr>`;
                $("#historyModal .modal-body tbody").prepend(html);
            }
        }

        var usersList = document.getElementById("users-list");
        if (usersList != null) {
            if (flag) {
                document.querySelector("#socket-id-" + userSocketId + " .referrer").innerHTML = data.referrer;

                document.querySelector("#socket-id-" + userSocketId + " .path").innerHTML = data.title;
                document.querySelector("#socket-id-" + userSocketId + " .path").setAttribute("href", data.path);
            } else {
                var html = "";
                html += `<tr id='socket-id-` + data.socketID + `'>
                <td>` + data.ipAddress + `</td>
                <td>` + data.country + `</td>
                <td><a class='referrer' href='` + data.referrer + `'>` + data.referrer + `</a></td>
                <td><a class='path' href='` + data.path + `'>` + data.title + `</a></td>
                <td>` + data.browserInfo + `</td>
                <td style="display: flex;">
                <button type="button"
                class="btn btn-primary"
                data-ip-address="` + data.ipAddress + `"
                data-email="` + data.email + `"
                onclick="tracker.showHistory(this);"
                style="border-top-right-radius: 0px; border-bottom-right-radius: 0px;">History</button>

                <button type="button"
                class="btn btn-secondary"
                data-ip-address="` + data.ipAddress + `"
                data-email="` + data.email + `"
                onclick="tracker.showChat(this);" style="border-top-left-radius: 0px; border-bottom-left-radius: 0px;">Chat</button>
                </td>
                </tr>`;

                usersList.innerHTML = html + usersList.innerHTML;
            }
        }
    }
};