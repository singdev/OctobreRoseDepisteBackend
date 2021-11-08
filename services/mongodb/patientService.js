const Patient = require("../../model/mongodb/patient");

module.exports = class {
  
  async create(patient){
    const newPatient = new Patient(patient);
    return await newPatient.save();
  }
  
  async findById(id){
    return await Patient.findOne({ _id: id});
  }
  
  async findAll(){
    return await Patient.find({});
  }
  
  async update(id, data){
    return await Patient.findOneAndUpdate({ _id: id}, data, { new: true});
  }
  
  async delete(id){
    return await Patient.findOneAndDelete({ _id: id});
  }
}