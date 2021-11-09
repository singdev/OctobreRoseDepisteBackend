
const Crenau = require("../../model/mongodb/creneaux");

module.exports = class {
  
  async create(crenau){
    const newCrenau = new Crenau(crenau);
    return await newCrenau.save();
  }
  
  async findById(id){
    return await Crenau.findOne({ _id: id});
  }
  
  async findAll(){
    return await Crenau.find({});
  }
  
  async update(id, data){
    return await Crenau.findOneAndUpdate({ _id: id}, data, { new: true});
  }
  
  async delete(id){
    return await Crenau.findOneAndDelete({ _id: id});
  }
}