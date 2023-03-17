const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");
const mysql = require("mysql")

//create connection
// const db = mysql.createConnection({
//   host : 'localhost:8889',
//   user : 'root',
//   password : '',
//   // database: 'evaluation'
  
// });
const db = mysql.createConnection({
  host : '127.0.0.1',
  port : '3306',
  user : 'root',
  password : 'password',
  database: 'Evaluation_Lims'
  
});

//connect
// db.connect(() => {
//   // if(error) console.log(error);
//     // throw error;
  
//   console.log('MySql Connected.....');
// });

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) =>{
  res.json("Hello this is backend")
});

app.get("/CV010", (req, res) =>{
  const q = "SELECT * FROM CV010"
  db.query(q, (err,data) => {
    if(err) return res.json(err)
    console.log("Values: ",data)
    return res.json(data)

  })
});

app.post("/CV010",(req,res) =>{
  // console.log("Request",req);
  const q = "INSERT INTO CV010 (`pid`,`date`, `facility`, `ct_value_ORF`, `e_GENE`, `internal_CTRL`, `pcr_result`, `poc_resut`, `poc_value`) VALUES(?)"
  const values = [
    req.body.pid,
    req.body.date,
    req.body.facility,
    req.body.ct_value_ORF,
    req.body.e_GENE,
    req.body.internal_CTRL,
    req.body.pcr_result,
    req.body.poc_resut,
    req.body.poc_value,
  ]

  console.log("Values: ",values)

  db.query(q,[values], (err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
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
