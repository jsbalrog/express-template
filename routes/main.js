var ctrl = require('../app_server/main');

module.exports = function(app) {
  app.use('/', ctrl.index);
};