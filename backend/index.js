const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const mysql = require("mysql")

//create connection
const db = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '123456',
  database: 'evaluation'
  
});

//connect
db.connect(() => {
  // if(error) console.log(error);
    // throw error;
  
  console.log('MySql Connected.....')
});

const app = express();

app.get('/createdb', (req,res) =>{
  let sql = 'CREATE DATABASE evaluation';
  db.query(sql, (error, result) => {
    if(error) {console.log(error);}
    console.log(result)
    res.send('Database created...');
  })
});

app.get("/list",(req,res) =>{
  res.send("list of items");
});

app.post("/additem",(req,res) =>{
  console.log(req.body)
  res.send("Add item");
});

app.get("/deleteitem",(req,res) =>{
  res.send("Delete item");
});


app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.listen("5000", () => {
  console.log("Server is running!");
});
