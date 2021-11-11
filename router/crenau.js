const express = require("express");
const router = express.Router();

const CrenauController = require("../controller/crenauController");
const crenauController = new CrenauController();

module.exports = (app) => {
  
  router.post("/", async (req, res) => {
    await crenauController.createNewCrenau(req, res);
  });
  
  // router.get("/:id", app.oauth.authorise(), async (req, res) => {
    router.get("/:id",async (req, res) => {
    await crenauController.findCrenauById(req, res);
  });
  
  router.get("/", async (req, res) => {
    await crenauController.findAllCrenau(req, res);
  });
  
  router.put("/:id", async (req, res) => {
    await crenauController.updateCrenau(req, res);
  });
  router.delete("/:id", async (req, res) => {
    await crenauController.deleteCrenau(req, res);
  });
  return router;
}