const mongoose = require("mongoose");

const mongoDBHost = process.env.MONGO_URL || "mongodb://localhost:27017/octobrerose_dev2"

module.exports = () => {
  mongoose.connect(mongoDBHost);
  mongoose.connection.on("error", () => console.log("Failed to connect mongodb !"));
  mongoose.connection.on("open", () => console.log("MongoDB is connected !"));

}