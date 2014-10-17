var ctrl = require('../main');

module.exports = function(app) {
  app.use('/', ctrl.index);
};