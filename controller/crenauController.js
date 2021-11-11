<<<<<<< HEAD
=======

>>>>>>> b8a5fe48082d64c17225d43db26126969c380dfe
const CrenauService = require("../services/mongodb/crenauService");

module.exports = class {
  
  constructor(){
    this.crenauService = new CrenauService();
  }
  
  async createNewCrenau(req, res) {
    try {
      const result = await this.crenauService.create(req.body);
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
  
  async findCrenauById(req, res) {
    try {
      const result = await this.crenauService.findById(req.params.id);
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
  
  async findAllCrenau(req, res) {
    try {
      const result = await this.crenauService.findAll();
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
  
  async updateCrenau(req, res) {
    try {
      const result = await this.crenauService.update(req.params.id, req.body);
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
<<<<<<< HEAD
=======

>>>>>>> b8a5fe48082d64c17225d43db26126969c380dfe
  async deleteCrenau(req, res) {
    try {
      const result = await this.crenauService.delete(req.params.id);
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