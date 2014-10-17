module.exports = function(app) {
  require('./users')(app);
  // Otherwise, go to the home page
  require('./main')(app);
};
