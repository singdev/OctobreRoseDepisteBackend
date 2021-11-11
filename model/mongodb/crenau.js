const mongoose = require("mongoose");

module.exports = mongoose.model("Crenau", mongoose.Schema({
  date: { type: Date },
  heureDebut: { type: String},
  heureFin: { type: String}
  
}));