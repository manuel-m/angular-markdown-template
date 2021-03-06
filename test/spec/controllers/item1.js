'use strict';

describe('Controller: Item1Ctrl', function () {

  // load the controller's module
  beforeEach(module('pragmacareApp'));

  var Item1Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Item1Ctrl = $controller('Item1Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
