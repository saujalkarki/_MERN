// requiring express
const express = require("express");
const app = express();

// requiring mongoose
// const mongoose = require("mongoose");

// importing dbConfig function from above
const { dbConfig } = require("./dbConfig/dbConfig");

dbConfig();

// connecting to database
// in seperate file called dbconfig .js
// mongoose
//   .connect(1
//     "mongodb+srv://CMS:CMS@cluster0.i6fffsd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//   )
//   .then(() => {
//     console.log("Database connected Successfully");
//   });

app.get("/", (req, res) => {
  res.json({
    status: "200",
    message: "Success",
    m2: "You have been directed to the base link",
  });
});

app.listen(3000, (req, res) => {
  console.log("The node application has sucessfully ran on port 3000");
});
