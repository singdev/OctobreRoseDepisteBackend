const DepistageService = require("../services/mongodb/depistageService");

module.exports = class {
  
  constructor(){
    this.depistageService = new DepistageService();
  }
  
  async createNewDepistage(req, res) {
    try {
      const result = await this.depistageService.create(req.body);
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
  
  async findDepistageById(req, res) {
    try {
      const result = await this.depistageService.findById(req.params.id);
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
  
  async findAllDepistage(req, res) {
    try {
      const result = await this.depistageService.findAll();
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
  
  async updateDepistage(req, res) {
    try {
      const result = await this.depistageService.update(req.params.id, req.body);
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