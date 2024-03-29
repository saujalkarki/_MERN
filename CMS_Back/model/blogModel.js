const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    subTitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
