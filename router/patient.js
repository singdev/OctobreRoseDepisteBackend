const express = require("express");
const router = express.Router();

module.exports = (app) => {
  
  router.post("/", (req, res) => {
    res.send("Create patient");
  });
  
  router.get("/:id", (req, res) => {
    res.send("Get by Id");
  });
  
  router.put("/:id", (req, res) => {
    res.send("Update patient");
  });
  
  return router;
}