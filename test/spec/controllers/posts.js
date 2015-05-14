'use strict';

describe('Controller: PostsCtrl', function () {

  // load the controller's module
  beforeEach(module('diggitApp'));

  var PostsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PostsCtrl = $controller('PostsCtrl', {
      $scope: scope
    });
  }));

  it('should have no posts to start', function () {
    expect(scope.posts.length).toBe(0);
  });

  /*it('should add posts to the list', function() {
    scope.post = 'Test 1';
    scope.submitPost();
    expect(scope.posts.length).toBe(1);
  });

  it('should add then remove a post from the list', function() {
    scope.todo = 'Test 1';
    scope.submitPost();
    scope.deletePost(0);
    expect(scope.posts.length).toBe(0);
  });*/
});
