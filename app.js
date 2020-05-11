var app = angular.module('flapperNews', []);

app.factory('posts', [function(){
    // service body
    var o = {
        posts: []
      };
      return o;
  }])

app.controller('MainCtrl', [
'$scope',
function($scope){

    'posts',
    function($scope, posts){
        $scope.posts = posts.posts;
    };

      $scope.posts = [
        {title: 'post 1', upvotes: 5},
        {title: 'post 2', upvotes: 2},
        {title: 'post 3', upvotes: 15},
        {title: 'post 4', upvotes: 9},
        {title: 'post 5', upvotes: 4}
      ];

    $scope.addPost = function(){
        if(!$scope.title || $scope.title === '') { return; }
        $scope.posts.push({
          title: $scope.title,
          link: $scope.link, //this link is including the project path and then searching the endPoint.
          upvotes: 0
        });
        $scope.title = '';
        $scope.link = '';
      };
    /*$scope.addPost = function(){
      if(!$scope.title || $scope.title === '') { return; } //makes sure no empty characters are inserted by user.
      // $scope.posts.push({title: 'A new post!', upvotes: 0}); 
      $scope.posts.push({title:$scope.title , upvotes:0});
      $scope.title='';
    };*/

    $scope.incrementUpvotes = function(post) {
        post.upvotes += 1;
      };
}]);