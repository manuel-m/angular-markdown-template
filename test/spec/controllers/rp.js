'use strict';

describe('Controller: RpCtrl', function () {

  // load the controller's module
  beforeEach(module('pragmacareApp'));

  var RpCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RpCtrl = $controller('RpCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
