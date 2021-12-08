const express = require("express");
const router = express.Router();

const LoginControler = require("../controller/loginController");
const loginController = new LoginControler();

const AccessControl = require("../services/security/authService");
const accessControl = new AccessControl();

const MedecinService = require("../services/mongodb/medecinService");
const medecinService = new MedecinService();

const AccountService = require("../services/mongodb/accountService");
const accountService = new AccountService();

module.exports = (app) => {

  router.post("/login", async (req, res) => {
    await loginController.login(req, res);
  });

  router.get("/account",
    async (req, res, next) => {
      await accessControl.authorise(req, res, next);
    },
    async (req, res) => {
      res.send(await medecinService.findByAccount(req.user.account._id));
    });

  router.put("/account/:id",
    async (req, res, next) => {
      await accessControl.authorise(req, res, next);
    },
    async (req, res) => {
      res.send(await accountService.update(req.params.id, req.body));
    });

  return router;
}