module.exports = function (casper, scenario, vp) {
  casper.mouse.move('li:first-child a');
  casper.evaluate(function () {
  });
  console.log('onReady.js has run for: ', vp.name);
};
