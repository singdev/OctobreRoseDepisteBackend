const Patient = require("../../model/mongodb/patient");

module.exports = class {
  
  async create(patient){
    const newPatient = new Patient(patient);
    return await newPatient.save();
  }
  
  async findById(id){
    return await Patient.findOne({ _id: id}).populate("creneau").populate("medecin").populate("centre").exec();
  }
  
  async findAll(){
    return await Patient.find({}).populate("creneau").populate("medecin").populate("centre").exec();
  }
  
  async findByMedecin(medecin){
    return await Patient.find({ medecin }).populate("creneau").populate("medecin").populate("centre").exec();
  }
  
  async findByCreneau(creneau){
    return await Patient.find({ creneau }).populate("creneau").populate("medecin").populate("centre").exec();
  }
  
  async update(id, data){
    return await Patient.findOneAndUpdate({ _id: id}, data, { new: true}).populate("creneau").populate("medecin").populate("centre").exec();
  }
  
  async delete(id){
    return await Patient.findOneAndDelete({ _id: id});
  }
}