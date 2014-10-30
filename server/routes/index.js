'use strict';

module.exports = function(router) {
  require('./users')(router);
  // Otherwise, go to the home page
  require('./main')(router);
};
