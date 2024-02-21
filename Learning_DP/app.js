const express = require("express");
const app = express();

// Alternative
// const app = require("express")();

app.get("/", (req, res) => {
  //   res.send("The root route ");
  res.json({
    message: "Instead of message we used json format",
  });
});

app.listen(3000, (req, res) => {
  console.log("Node js has just started on port 3000");
});
