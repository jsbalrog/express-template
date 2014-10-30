var ctrl = require('../users');

module.exports = function(router) {
  router.get('/users', ctrl.index);
};
