const express = require("express");
const router = express.Router();

const MedecinController = require("../controller/medecinController");
const medecinController = new MedecinController();

module.exports = (app) => {
  
  router.post("/",(req, res, next) => authService.authorise(req, res, next), async (req, res) => {
    await medecinController.createNewMedecin(req, res);
  });
  
  router.get("/:id", async (req, res) => {
          await medecinController.findMedecinById(req, res);
      });
  
  router.get("/", async (req, res) => {
    await medecinController.findAllMedecin(req, res);
  });
  
  router.put("/:id", async (req, res) => {
    await medecinController.updateMedecin(req, res);
  });
  
  return router;
}