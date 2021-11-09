const express = require("express");
const router = express.Router();

const CentreController = require("../controller/centreController");
const centreController = new CentreController();

module.exports = (app) => {
  
  router.post("/", async (req, res) => {
    await centreController.createNewCentre(req, res);
  });
  
  router.get("/:id", async (req, res) => {
    await centreController.findCentreById(req, res);
  });
  
  router.get("/", async (req, res) => {
    await centreController.findAllCentre(req, res);
  });
  
  router.put("/:id", async (req, res) => {
    await centreController.updateCentre(req, res);
  });
  
  return router;
}