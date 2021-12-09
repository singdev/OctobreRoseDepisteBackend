const Creneau = require("../../model/mongodb/creneaux");

module.exports = class {
  
  async create(centre){
    const newCreneau = new Creneau(centre);
    return await newCreneau.save();
  }
  
  async findById(id){
    return await Creneau.findOne({ _id: id}).populate("medecin").exec();
  }
  
  async findByMedecin(medecin){
    return await Creneau.find({ medecin}).populate("medecin").exec();
  }
  
  async findAll(){
    return await Creneau.find({}).populate("medecin").exec();
  }
  
  async update(id, data){
    return await Creneau.findOneAndUpdate({ _id: id}, data, { new: true});
  }
  
  async delete(id){
    return await Creneau.findOneAndDelete({ _id: id});
  }
}