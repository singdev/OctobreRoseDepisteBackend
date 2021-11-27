const express = require("express");
const router = express.Router();

const CentreController = require("../controller/centreController");
const centreController = new CentreController();

const AuthService = require("../services/security/authService");
const authService = new AuthService();

module.exports = (app) => {
  
  // router.post("/", app.oauth.authorise(), async (req, res) => {
    router.post("/",(req, res, next) => authService.authorise(req, res, next), async (req, res) => {
    await centreController.createNewCentre(req, res);
  });
  
  router.get("/:id", async (req, res) => {
    await centreController.findCentreById(req, res);
  });
  
  router.get("/", async (req, res) => {
    await centreController.findAllCentre(req, res);
  });
  
  router.put("/:id",async (req, res) => {
    await centreController.updateCentre(req, res);
  });
  router.delete("/:id", async (req, res) => {
    await centreController.deleteCentre(req, res);
  });
  return router;
}