const express = require("express");
const router = express.Router();

const PatientController = require("../controller/patientController");
const patientController = new PatientController();

const AuthService = require("../services/security/authService");
const authService = new AuthService();

module.exports = (app) => {
  
  router.post("/", async (req, res) => {
    await patientController.createNewPatient(req, res);
  });
  
  router.get("/:id", async (req, res) => {
          await patientController.findPatientById(req, res);
      });
  
  router.get("/", 
  (req, res, next) => authService.authorise(req, res, next),
   async (req, res) => {
    await patientController.findAllPatient(req, res);
  });
  
  router.put("/:id", async (req, res) => {
    await patientController.updatePatient(req, res);
  });
  
  return router;
}