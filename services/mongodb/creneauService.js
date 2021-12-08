const Creneau = require("../../model/mongodb/creneaux");

module.exports = class {
  
  async create(centre){
    const newCreneau = new Creneau(centre);
    return await newCreneau.save();
  }
  
  async findById(id){
    return await Creneau.findOne({ _id: id});
  }
  
  async findAll(){
    return await Creneau.find({});
  }
  
  async update(id, data){
    return await Creneau.findOneAndUpdate({ _id: id}, data, { new: true});
  }
  
  async delete(id){
    return await Creneau.findOneAndDelete({ _id: id});
  }
}