const test = require("./test");
const patient = require("./patient");
const cancer = require("./cancer");
const centre = require("./centre");
const compte = require("./compte");
const crenau = require("./crenau");

module.exports = (app) => {
  
  app.use("/api/test", test(app));
  app.use("/api/patient", patient(app));
  app.use("/api/cancer", cancer(app));
  app.use("/api/centre", centre(app));
  app.use("/api/compte", compte(app));
  app.use("/api/crenau", crenau(app));
}