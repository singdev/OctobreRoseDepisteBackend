const mongoose = require("mongoose");

module.exports = mongoose.model("Centre", mongoose.Schema({
  nom: { type: String },
  latitude: { type: String},
  Longitude: { type: String},
  ville: { type: String },
  quartier: { type: String },
  pays: { type: String }
}));