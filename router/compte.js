const express = require("express");
const router = express.Router();

const CompteController = require("../controller/compteController");
const compteController = new CompteController();

module.exports = (app) => {
  
  router.post("/", async (req, res) => {
    await compteController.createNewCompte(req, res);
  });
  
  // router.get("/:id", app.oauth.authorise(), async (req, res) => {
    router.get("/:id",async (req, res) => {
    await compteController.findCompteById(req, res);
  });
  
  router.get("/", async (req, res) => {
    await compteController.findAllCompte(req, res);
  });
  
  router.put("/:id", async (req, res) => {
    await compteController.updateCompte(req, res);
  });
  router.delete("/:id", async (req, res) => {
    await compteController.deleteCompte(req, res);
  });
  return router;
}