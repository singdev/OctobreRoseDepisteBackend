const PatientService = require("../services/mongodb/patientService");

module.exports = class {
  
  constructor(){
    this.patientService = new PatientService();
  }
  
  async createNewPatient(req, res) {
    try {
      const result = await this.patientService.create(req.body);
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
  
  async findPatientById(req, res) {
    try {
      const result = await this.patientService.findById(req.params.id);
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
  
  async findAllPatient(req, res) {
    try {
      const result = await this.patientService.findAll();
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
  
  async updatePatient(req, res) {
    try {
      const result = await this.patientService.update(req.params.id, req.body);
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