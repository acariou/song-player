'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angularsrssApp','mockedFeed'));

  var MainCtrl, scope, mockedFeed, httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $httpBackend, defaultJSON) {
      // Met le flux en place
      httpBackend = $httpBackend;
      $httpBackend.whenJSONP(/query.yahooapis.com/).respond(defaultJSON);

    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('Devrait avoir une liste de flux', function () {
    expect(scope.feeds.length).toBe(1);
      httpBackend.flush();
      expect(scope.feeds[0].items[0].title).toBe('Node Roundup: 0.11.2, 0.10.6, subscribe, Omelette');
  });
});
