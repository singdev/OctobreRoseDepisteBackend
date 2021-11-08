const express = require("express");
const router = express.Router();

module.exports = (app) => {
  
  router.get("/hello/:prenom", (req, res) => {
    //Traitement a ne pas reproduire please !
    res.send({
      comment: "Test Octobre Rose API",
      message: `Hello ${req.params.prenom}`
    });
  });
  
  router.get("/counter/:max", (req, res) => {
    let array = [];
    const max = Number.parseInt(req.params.max);
    if(isNaN(max)){
      res.status(400);
      res.send("Bad Request ! Max is not a number");
      return;
    }
    for(let i = 0; i < max; i++){
      array.push(i);
    }
    res.send(array);
  });
  
  return router;
}