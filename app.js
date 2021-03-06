var app = angular.module('app',[]);
app.controller("FirtController", function($scope, $filter) {
  //ecach post has to have an object,we have post.vote bc every post has vote and post.date every post has date
  $scope.posts=[];
  $scope.post = {};
  $scope.post.vote = 0;
  //debugger
  $scope.post.isPositiveNegative = 0;
  //every post can have comments so we need to add that comment is not visialbe by adding this formCommentVisible:false, and every post has and emptyhy []of comments
  //$scope.posts = [{title:"First Post", comments:[],formCommentVisible:false,  author:"Andrew",vote:0, description:"hello there", image:"data:image/jpeg;base64,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"}];
 //$scope.newPost = {title:"", author:"", image:"", description:""};
  $scope.formVisible = false;
  $scope.addPost = function(newPost){
    //since i hard coded taht every post's vote starts at 0, i have to snik in here a newPost.vote =0
    //we do not have to use scope $ bc newPost i parametar and view when comunicates with controler doesn't need $scope
    //before you were having $scope.post.date = new Data(); and it was applaying everywhere but you jsut want when you creat a new post inside of fucnction
    if ($scope.postForm.$valid){
    newPost.date = new Date();
    //newPost.comments has to be assigen to an empty []
    newPost.vote = 0;
    newPost.formComments=false;
    newPost.formCommentVisible = false;
    newPost.comments=[];
    //for counting comments
    newPost.commentCount = 0;
    $scope.posts.push(newPost);
    $scope.newPost={};
    //show form
    $scope.formVisible = !$scope.formVisible;
    $scope.postForm.$setPristine();
    }
    else{
      //debugger
      $scope.postForm.title.$setDirty();
      $scope.postForm.author.$setDirty();
      $scope.postForm.image.$setDirty();
      $scope.postForm.description.$setDirty();
      $scope.postForm.$setDirty();
    }
  };
   $scope.showForm = function(){
      $scope.formVisible = !$scope.formVisible;
    };
  
   $scope.increaseVote = function(post){
       //debugger 
      post.vote +=1;
    
      if (post.vote >= 1)
      {
        post.isPositiveNegative = "green";
      }
      if(post.vote === 0) {
        post.isPositiveNegative = 0;
      }
    };
     $scope.downVote = function(post){
      // debugger 
      post.vote -= 1;
      if(post.vote <= -1) 
      {
        post.isPositiveNegative = "red";
      }
       if(post.vote === 0) {
        post.isPositiveNegative = 0;
      }
    };
      //COMMENTS
      //$scope.post.comments = [{author:"Maja", text:"awesome"}];
      //$scope.post.newComment = {author:"", text:""};
      //in order to addComment you need to create a function nad pass two parametars post bc specific post and a newComment
      $scope.addComment = function (post){
      //this post is coming from my view 
      //you have to say that is post.formCommentVisible specific post
      //if true or false you need this in ordrer to toggle between hide and shwo form
      //debugger
      //increaming 
        post.formComments=true;
        post.commentCount++;
        post.comments.push(post.newComment);
        //CLEAN FORM
        post.newComment={};
        post.formCommentVisible = !post.formCommentVisible;
      };
      
      $scope.showCommentForm = function(post){
        //debugger
        post.formComments=false;//it works with out as well
        post.formCommentVisible = !post.formCommentVisible;
      //post.formComments = !post.formComments;  
      };

       $scope.showComments = function(post){
        //debugger
        post.formComments = !post.formComments;
      };

      // $scope.seeComments = function(post){
      //   return post.comments.length();
      // };
 
   
});

   


