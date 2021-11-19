const test = require("./test");
const patient = require("./patient");
const cancer = require("./cancer");
const medecin = require("./medecin");
const depistage = require("./depistage");



module.exports = (app) => {
  
  app.use("/api/test", test(app));
  app.use("/api/patient", patient(app));
  app.use("/api/cancer", cancer(app));
  app.use("/api/medecin", medecin(app));
  app.use("/api/depistage", depistage(app));
}