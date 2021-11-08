const test = require("./test");
const patient = require("./patient");
const cancer = require("./cancer");

module.exports = (app) => {
  
  app.use("/api/test", test(app));
  app.use("/api/patient", patient(app));
  app.use("/api/cancer", cancer(app));
}