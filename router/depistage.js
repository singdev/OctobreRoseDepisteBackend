const express = require("express");
const router = express.Router();

const DepistageController = require("../controller/depistageController");
const depistageController = new DepistageController();

module.exports = (app) => {
  
  router.post("/", async (req, res) => {
    await depistageController.createNewDepistage(req, res);
  });
  
  router.get("/:id", async (req, res) => {
          await depistageController.findDepistageById(req, res);
      });
  
  router.get("/", async (req, res) => {
    await depistageController.findAllDepistage(req, res);
  });
  
  router.put("/:id", async (req, res) => {
    await depistageController.updateDepistage(req, res);
  });
  
  return router;
}