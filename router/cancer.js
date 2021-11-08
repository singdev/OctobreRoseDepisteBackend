const express = require("express");
const router = express.Router();

const CancerController = require("../controller/cancerController");
const cancerController = new CancerController();

module.exports = (app) => {
  
  router.get("/", (req, res) => {
    cancerController.findAllCancer(req, res);
  });
  
  return router;
}