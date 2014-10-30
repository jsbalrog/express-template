'use strict';

var ctrl = require('../main');

module.exports = function(router) {
  router.get('/', ctrl.index);
};
