'use strict';

describe('Filter: hostnameFromUrl', function () {

  // load the controller's module
  beforeEach(module('diggitApp'));

  var hostnameFromUrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($filter, $rootScope) {
    scope = $rootScope.$new();
    hostnameFromUrl = $filter('hostnameFromUrl', {
      $scope: scope
    });
  }));

/*  it('strip off http://', function () {
    var webAddress = 'http://www.a.com';
    var resultWebAddress = hostnameFromUrl(webAddress);
    expect(resultWebAddress).toBe('wwww.a.com');
  });*/
});
