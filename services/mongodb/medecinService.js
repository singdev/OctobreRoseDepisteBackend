const Medecin = require("../../model/mongodb/medecin");

module.exports = class {
  
  async create(medecin){
    const newMedecin = new Medecin(medecin);
    return await newMedecin.save();
  }
  
  async findById(id){
    return await Medecin.findOne({ _id: id});
  }
  
  async findAll(){
    return await Medecin.find({});
  }
  
  async update(id, data){
    return await Medecin.findOneAndUpdate({ _id: id}, data, { new: true});
  }
  
  async delete(id){
    return await Medecin.findOneAndDelete({ _id: id});
  }
}