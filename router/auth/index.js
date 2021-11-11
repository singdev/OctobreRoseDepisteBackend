const OAuthServer = require('node-oauth2-server');
const model = require("./model");

module.exports = (app) => {
  
  app.oauth = new OAuthServer({
    model: model,
    grants: ['password'],
    debug: true,
    accessTokenLifetime: null
  });
  
  app.use(app.oauth.errorHandler());
  
}