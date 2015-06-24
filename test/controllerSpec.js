describe('main controller', function() {
  beforeEach(module('WeatherApp'));

  var $controller;
  var controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  it('Should return an object', function() {
    var $scope = {};
    controller = $controller('MainController', { $scope: $scope });
    expect(typeof controller).toBe('object');
  });
});
