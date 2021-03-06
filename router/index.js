const test = require("./test");
const patient = require("./patient");
const cancer = require("./cancer");
const medecin = require("./medecin");
const depistage = require("./depistage");
const centre = require("./centre");
const auth = require("./auth");
const creneau = require("./creneau");

module.exports = (app) => {
  
  app.use("/api/test", test(app));
  app.use("/api/patient", patient(app));
  app.use("/api/cancer", cancer(app));
  app.use("/api/medecin", medecin(app));
  app.use("/api/depistage", depistage(app));
  app.use("/api/centre", centre(app));
  app.use("/api/auth", auth(app));
  app.use("/api/creneau", creneau(app));
}