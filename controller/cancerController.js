const cancer = require("../services/memory/cancerService");

module.exports = class {
  
  constructor(){
    
  }
  
  findAllCancer(req, res) {
    if(cancer == null){
      res.sendStatus(404);
    }
    res.send(cancer);
  }
  
}