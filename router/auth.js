const express = require("express");
const router = express.Router();

const LoginControler = require("../controller/loginController");
const loginController = new LoginControler();

module.exports = (app) => {
  
  router.post("/login", async (req, res) => {
    await loginController.login(req, res);
  });
  
  return router;
}