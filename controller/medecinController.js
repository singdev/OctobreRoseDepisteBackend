const MedecinService = require("../services/mongodb/medecinService");
const AccountService = require("../services/mongodb/accountService");
const crypto = require("../services/security/cryptoService");

module.exports = class {
  
  constructor(){
    this.medecinService = new MedecinService();
    this.accountService = new AccountService();
  }
  
  async createNewMedecin(req, res) {
    try {
      const accountBody = {
        username: req.body.email,
        password: crypto.encrypt(req.body.password),
        fullname: req.body.nom + " " + req.body.prenom
      };
      let account = await this.accountService.getByUsername(req.body.username);
      if(account == null){
        account = await this.accountService.create(accountBody);
      }
      if(account){
        req.body.account = account;
        const result = await this.medecinService.create(req.body);
        if(result){
          res.status(201);
          res.send(result);
        } else {
          res.sendStatus(400);
        } 
      } else {
        res.sendStatus(400);
      }
    } catch(err){
      res.status(500);
      res.send(err);
    }
  }
  
  async findMedecinById(req, res) {
    try {
      const result = await this.medecinService.findById(req.params.id);
      console.log(result);
      if(result){
        res.send(result);
      } else {
        res.sendStatus(404);
      }
    } catch(err){
      res.status(500);
      res.send(err);
    }
  }
  
  async findAllMedecin(req, res) {
    try {
      const result = await this.medecinService.findAll();
      if(result){
        res.send(result);
      } else {
        res.sendStatus(400);
      }
    } catch(err){
      res.status(500);
      res.send(err);
    }
  }
  
  async updateMedecin(req, res) {
    try {
      const result = await this.medecinService.update(req.params.id, req.body);
      if(result){
        res.send(result);
      } else {
        res.sendStatus(400);
      }
    } catch(err){
      res.status(500);
      res.send(err);
    }
  }
}