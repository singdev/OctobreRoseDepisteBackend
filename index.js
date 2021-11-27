const web = require("./bin/web");
const mongodb = require("./bin/mongodb");
const init = require("./bin/init");

init();
web();
mongodb();