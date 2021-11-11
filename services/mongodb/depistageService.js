const Depistage = require("../../model/mongodb/depistage");

module.exports = class {
  
  async create(depistage){
    const newDepistage = new Depistage(depistage);
    return await newDepistage.save();
  }
  
  async findById(id){
    return await Depistage.findOne({ _id: id});
  }
  
  async findAll(){
    return await Depistage.find({});
  }
  
  async update(id, data){
    return await Depistage.findOneAndUpdate({ _id: id}, data, { new: true});
  }
  
  async delete(id){
    return await Depistage.findOneAndDelete({ _id: id});
  }
}