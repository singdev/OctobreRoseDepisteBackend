const MedecinService = require("../services/mongodb/medecinService");



module.exports = class {
  
  constructor(){
    this.medecinService = new MedecinService();
  }
  
  async createNewMedecin(req, res) {
    try {
      const result = await this.medecinService.create(req.body);
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
  
  async findMedecinById(req, res) {
    try {
      const result = await this.medecinService.findById(req.params.id);
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