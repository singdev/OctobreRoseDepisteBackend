const mongoose = require("mongoose");

module.exports = mongoose.model("Compte", mongoose.Schema({
  type: { type: String },
  NomUTilisateur: { type: String},
  motDePasse: { type: String},
  email: { type: String},
  telephone: { type: String },
  isActive: { type: String }
  
}));