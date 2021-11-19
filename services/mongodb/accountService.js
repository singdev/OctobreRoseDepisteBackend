const Account = require("../../model/mongodb/account");

module.exports = class {
  
  constructor(){}
  
  async create(data){
    const object = new Account(data);
    return await object.save();
  }
  
  async update(id, data){
    return await Account.findByIdAndUpdate(id, data, { new: true });
  }
  
  async delete(id){
    return await Account.findByIdAndDelete(id);
  }
  
  async get(id){
    return await Account.findOne({ _id: id});
  }
  
  async getAll(){
    return await Account.find({});
  }
  
  async getByUsername(username){
    return await Account.findOne({ username});
  }
}