angular.module('Cordova', [])
.factory('deviceReady', function () {
  return function(done) {
    if (typeof window.cordova === 'object') {
      document.addEventListener('deviceReady', function() {
        done();
      }, false);
    } else {
      done();
    }
  };
});
