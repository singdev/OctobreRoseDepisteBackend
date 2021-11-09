const test = require("./test");
const patient = require("./patient");
const cancer = require("./cancer");
const creneau = require("./crenau");

module.exports = (app) => {
  
  app.use("/api/test", test(app));
  app.use("/api/patient", patient(app));
  app.use("/api/cancer", cancer(app));
  app.use("/api/creneau", creneau(app));


}