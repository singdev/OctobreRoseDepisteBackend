const express = require("express");
const router = express.Router();

const PatientController = require("../controller/patientController");
const patientController = new PatientController();

module.exports = (app) => {
  
  router.post("/", async (req, res) => {
    await patientController.createNewPatient(req, res);
  });
  
  // router.get("/:id", app.oauth.authorise(), async (req, res) => {
    router.get("/:id",async (req, res) => {
    await patientController.findPatientById(req, res);
  });
  
  router.get("/", async (req, res) => {
    await patientController.findAllPatient(req, res);
  });
  
  router.put("/:id", async (req, res) => {
    await patientController.updatePatient(req, res);
  });
  
  return router;
}