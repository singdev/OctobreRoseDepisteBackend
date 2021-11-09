const CentreService = require("../services/mongodb/centreService");

module.exports = class {
  
  constructor(){
    this.centreService = new CentreService();
  }
  
  async createNewCentre(req, res) {
    try {
      const result = await this.centreService.create(req.body);
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
  
  async findCentreById(req, res) {
    try {
      const result = await this.centreService.findById(req.params.id);
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
  
  async findAllCentre(req, res) {
    try {
      const result = await this.centreService.findAll();
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
  
  async updateCentre(req, res) {
    try {
      const result = await this.centreService.update(req.params.id, req.body);
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