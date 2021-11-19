const AccountService = require("../services/mongodb/accountService");
const AuthService = require("../services/security/authService");
const crypto = require("../services/security/cryptoService");

module.exports = class {
  
  constructor(){
    this.accountService = new AccountService();
    this.authService = new AuthService();
  }

  async login(req, res){
    const account = await this.accountService.getByUsername(req.body.username);
    if(account){
      const shaPass = crypto.encrypt(req.body.password);
      if(shaPass === account.password){
        const token = this.authService.generateToken({ account });
        res.send({
          access_token: token,
        });
      } else {
        res.status(403);
        res.send("Password error");        
      }
    } else {
      res.status(404);
      res.send("User not found");
    }
  }
}