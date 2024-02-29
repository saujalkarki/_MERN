// requiring express
const express = require("express");
const app = express();

// parsing json data send by user through frontend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// importing dbConfig function from above
const { dbConfig } = require("./dbConfig/dbConfig");

// importing model
const Blog = require("./model/blogModel");

dbConfig();

app.get("/", (req, res) => {
  res.json({
    status: "200",
    message: "Success",
    m2: "You have been directed to the base link",
  });
});

// creating blog api
app.post("/createBlog", async (req, res) => {
  // Inserting DataBase logic
  await Blog.create({
    title: req.body.title,
    subTitle: req.body.subTitle,
    description: req.body.description,
  });

  res.json({
    status: 200,
    message: "Blog created Successfully",
  });

  // Alternative
  // res.status(200).json({
  //   message: "Blog created Successfully",
  // });
});

app.get("/readBlog", async (req, res) => {
  // fetching data from database
  const blogs = await Blog.find();

  if (blogs.length === 0) {
    res.json({
      status: 404,
      message: "No blogs founded",
    });
  } else {
    res.json({
      status: 200,
      message: "Blogs fetched successfully",
      data: blogs,
    });
  }
});

app.get("/readBlog/:id", async (req, res) => {
  const id = req.params.id;

  const oneBlog = await Blog.findById(id);

  if (!oneBlog) {
    res.json({
      status: 404,
      message: "No any blogs found",
    });
  } else {
    res.json({
      status: 200,
      message: "This is the blog you want to read",
      data: oneBlog,
    });
  }
});

app.patch("/updateBlog/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);

  const { title, subTitle, description } = req.body;

  await Blog.findByIdAndUpdate(id, {
    title,
    subTitle,
    description,
  });

  res.json({
    status: 200,
    message: "Blog updated successfully",
  });
});

app.listen(3000, (req, res) => {
  console.log("The node application has sucessfully ran on port 3000");
});
