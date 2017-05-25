module.exports = function (casper, scenario, vp) {
  // This script runs before your app loads. Edit here to log-in, load cookies or set other states required for your test.
  console.log('onBefore.js has run for ' + vp.name + '.');
  casper.userAgent = 'Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/535.7 (KHTML, like Gecko) Chrome/16.0.912.75 Safari/535.7';
};

// // EXAMPLE: LOGIN BEFORE RUNNING TESTS
// module.exports = function(casper, scenario, vp) {
//   casper.thenOpen(scenario.url, function(){
//      if (this.exists('form#user-login-form')) {
//        this.fill('form#loginForm',{
//           'username': 'test',
//           'password': 'changeme'
//        }, true);
//      }
//   });
// };
