const CompteService = require("../services/mongodb/compteService");

module.exports = class {
  
  constructor(){
    this.compteService = new CompteService();
  }
  
  async createNewCompte(req, res) {
    try {
      const result = await this.compteService.create(req.body);
      if(result){
        res.status(201);
        res.send(result);
      } else {
        res.sendStatus(400);
      }
    } catch(err){
      res.status(500);
      res.send(err);
    }
  }
  
  async findCompteById(req, res) {
    try {
      const result = await this.compteService.findById(req.params.id);
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
  
  async findAllCompte(req, res) {
    try {
      const result = await this.compteService.findAll();
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
  
  async updateCompte(req, res) {
    try {
      const result = await this.compteService.update(req.params.id, req.body);
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
  async deleteCompte(req, res) {
    try {
      const result = await this.compteService.delete(req.params.id);
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