const CreneauService = require("../services/mongodb/creneauService");

module.exports = class {
  
  constructor(){
    this.creneauService = new CreneauService();
  }
  
  async createNewCreneau(req, res) {
    try {
      const result = await this.creneauService.create(req.body);
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
  
  async findCreneauById(req, res) {
    try {
      const result = await this.creneauService.findById(req.params.id);
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
  
  async findAllCreneau(req, res) {
    try {
      const result = await this.creneauService.findAll();
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
  
  async updateCreneau(req, res) {
    try {
      const result = await this.creneauService.update(req.params.id, req.body);
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