const Centre = require("../../model/mongodb/centre");

module.exports = class {
  
  async create(centre){
    const newCentre = new Centre(centre);
    return await newCentre.save();
  }
  
  async findById(id){
    return await Centre.findOne({ _id: id});
  }
  
  async findAll(){
    return await Centre.find({});
  }
  
  async update(id, data){
    return await Centre.findOneAndUpdate({ _id: id}, data, { new: true});
  }
  
  async delete(id){
    return await Centre.findOneAndDelete({ _id: id});
  }
}