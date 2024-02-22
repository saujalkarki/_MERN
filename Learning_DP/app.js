const express = require("express");
const app = express();

// Alternative
// const app = require("express")();

app.get("/", (req, res) => {
  //   res.send("The root route ");
  res.json({
    message: "Most commonly used format is json",
    names: [
      {
        name: "Saujal",
        class: 10,
      },
      {
        caste: "Karki",
        single: false,
        rollno: 9,
      },
    ],
  });
});

app.get("/nav", (req, res) => {
  res.json({
    message: "This is the second routing link API",
  });
});

app.get("/contact", (req, res) => {
  res.send("This is contact page");
});

app.listen(3000, (req, res) => {
  console.log("Node js has just started on port 3000");
});
