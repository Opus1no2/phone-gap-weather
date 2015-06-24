describe('services', function(){
  beforeEach(module('WeatherApp'));

  var getWeather,
      deviceReady,
      $httpBackend,
      getCurrentPosition;

  beforeEach(inject(function(_getWeather_, _deviceReady_, _getCurrentPosition_, $httpBackend, $document, $window, $rootScope) {
    getWeather = _getWeather_;
    $httpBackend = $httpBackend;
    deviceReady = _deviceReady_;
    getCurrentPosition = _getCurrentPosition_;
  }));

  describe('WeatherApp.services.Cordova', function() {
    it('returns a function', function(){
      expect(typeof deviceReady).toBe('function');
    });
  });

  describe('Forecast', function() {
    it('returns a function', function(){
      expect(typeof getWeather).toBe('function');
    });
  });

  describe('Geolocation', function() {
    it('returns a function', function(){
      expect(typeof getCurrentPosition).toBe('function');
    });
  });
});
