const mongoose = require("mongoose");

module.exports = mongoose.model("Depistage", mongoose.Schema({
  date: { type: Date, default: Date.UTC},
  dateResultat: { type:Date, default: Date.now},
  Resultat: { type: String},
  detailResultat: { type: String },
  numero: { type: Number},
}));