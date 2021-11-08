const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const router = require("../router");

const app = express();

module.exports = () => {
  
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  
  router(app);
  
  const PORT = process.env.PORT || 3054;

  app.listen(PORT, () => console.log("Listenning at " + PORT));
}