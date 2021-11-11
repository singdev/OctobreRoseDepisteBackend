const Compte = require("../../model/mongodb/compte");

module.exports = class {
  
  async create(compte){
    const newCompte = new Compte(compte);
    return await newCompte.save();
  }
  
  async findById(id){
    return await Compte.findOne({ _id: id});
  }
  
  async findAll(){
    return await Compte.find({});
  }
  
  async update(id, data){
    return await Compte.findOneAndUpdate({ _id: id}, data, { new: true});
  }
  
  async delete(id){
    return await Compte.findOneAndDelete({ _id: id});
  }
}