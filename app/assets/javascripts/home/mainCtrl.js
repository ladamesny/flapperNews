angular.module('flapperNews')
.controller('MainCtrl', [
  '$scope',
  'posts',
  function($scope, posts){
  $scope.test = 'Hello World';
  $scope.posts = posts.posts;

  $scope.addPost = function(){
    if (!$scope.title || $scope.title === "") {return;}
    posts.create({
      title: $scope.title,
      link: $scope.link,
      upvotes: 0,
      comments:
        [
          { author: "Joe", body: "Cool Post!", upvotes: 0 },
          { author: "Bob", body: "Great job on this post!", upvotes: 0 }

        ]
    });
    $scope.title = "";
    $scope.link= "";
  };
  $scope.incrementUpVote = function(post){
    posts.upvote(post);
  };
}])


