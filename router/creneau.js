const express = require("express");
const router = express.Router();

const CreneauController = require("../controller/creneauController");
const creneauController = new CreneauController();

const AuthService = require("../services/security/authService");
const authService = new AuthService();

module.exports = (app) => {
  
  // router.post("/", app.oauth.authorise(), async (req, res) => {
    router.post("/",(req, res, next) => authService.authorise(req, res, next), async (req, res) => {
    await creneauController.createNewCreneau(req, res);
  });
  
  router.get("/:id", async (req, res) => {
    await creneauController.findCreneauById(req, res);
  });
  
  router.get("/", async (req, res) => {
    await creneauController.findAllCreneau(req, res);
  });
  
  router.put("/:id",async (req, res) => {
    await creneauController.updateCreneau(req, res);
  });

  return router;
}