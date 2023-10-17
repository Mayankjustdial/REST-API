const mongoose = require("mongoose");

const connectDB = (uri) => {
  console.log("connect Db");
  return mongoose.connect(uri, {
    useNewURLParser: true,
    // useUnifiedToplogy: true,
  });
};

module.exports = connectDB;
