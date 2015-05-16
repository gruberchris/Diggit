'use strict';

app.controller('PostsCtrl', function($scope, $location, Post, Auth) {
  $scope.posts = Post.all;
  $scope.user = Auth.user;
  $scope.post = {url: 'http://', 'title': ''};
  $scope.editing = false;

  $scope.deletePost = function(post) {
    Post.delete(post);
  };

  $scope.editPost = function(post) {
    Post.save(post);
  };
});
