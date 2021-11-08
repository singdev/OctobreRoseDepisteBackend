const test = require("./test");
const patient = require("./patient");

module.exports = (app) => {
  
  app.use("/api/test", test(app));
  app.use("/api/patient", patient(app));
}