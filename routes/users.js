var ctrl = require('../app_server/users');

module.exports = function(app) {
  app.use('/users', ctrl.index);
};