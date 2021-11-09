const test = require("./test");
const patient = require("./patient");
const cancer = require("./cancer");
const centre = require("./centre");

module.exports = (app) => {
  
  app.use("/api/test", test(app));
  app.use("/api/patient", patient(app));
  app.use("/api/cancer", cancer(app));
  app.use("/api/centre", centre(app));
}