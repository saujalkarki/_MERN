const mongoose = require("mongoose");

exports.dbConfig = async () => {
  await mongoose.connect(
    "mongodb+srv://CMS:CMS@cluster0.i6fffsd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("Database connected successfully");
};
