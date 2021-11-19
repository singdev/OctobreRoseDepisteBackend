const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET || "secret";

module.exports = class {

  generateToken(payload) {
    try {
      return jwt.sign(payload, SECRET, { expiresIn: '1h' });
    } catch (err) {
      return null;
    }
  }

  verifyToken(token) {
    try {
      var decoded = jwt.verify(token, SECRET);
      return decoded;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  authorise(req, res, next) {
      const header = req.headers;
      console.log(req.headers);
      const authorization = header['authorization'];
      console.log(authorization);
      if(!authorization){
        res.status(401);
        res.send("Bad credentials");
        return;
      }
      const token = authorization.split("Bearer ")[1];
      const decoded = this.verifyToken(token);
      if(decoded){
        req.user = decoded;
        next();
      } else {
        res.status(401);
        res.send("Bad token");
      }
      
  }
}