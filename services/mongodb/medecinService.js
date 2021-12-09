const Medecin = require("../../model/mongodb/medecin");

module.exports = class {
  
  async create(medecin){
    const newMedecin = new Medecin(medecin);
    return await newMedecin.save();
  }
  
  async findById(id){
    return await Medecin.findOne({ _id: id}).populate("account").populate("centre").exec();
  }
  
  async findByAccount(account){
    return await Medecin.findOne({ account }).populate("account").populate("centre").exec();
  }
  
  async findAll(){
    return await Medecin.find({}).populate("account").populate("centre").exec();
  }
  
  async update(id, data){
    return await Medecin.findOneAndUpdate({ _id: id}, data, { new: true}).populate("account").populate("centre").exec();
  }
  
  async delete(id){
    return await Medecin.findOneAndDelete({ _id: id}).populate("account").populate("centre").exec();
  }
}