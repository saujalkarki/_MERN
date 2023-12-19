// const http = require("http");

// const hostname = "127.0.0.1";
// const port = 3200;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("content-Type", "text/plain");
//   res.end("hello World\n");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// const fs = require("node:fs");

// fs.writeFile("data/demo.txt", "Hello World", (err, data) => {
//   if (err) throw err;
//   console.log("Data", data);
// });

// fs.readFile("data/demo.txt", (err, data) => {
//   if (err) throw err;
//   console.log("Data", data);
// });

// const path = require("node:path");

// console.log("Extension", path.extname("/data/demo.txt"));
// console.log("Extension", path.join("/data", "demo", "demo-1"));

// const os = require("node:os");
// // console.log(os.type());
// // console.log(os.cpus());
// console.log(os.arch());

// const fs = require("node:fs/promises");

// fs.writeFile("demo.txt", "Hello World")
//   .then((data) => console.log("Data", data))
//   .catch((err) => console.log("Error", err));

// fs.readFile("demo.txt", { encoding: "base64" })
//   .then((data) => console.log("Data", data))
//   .catch((err) => console.log("Error", err));

const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/home", (req, res) => {
  res.send("This is Home page");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
