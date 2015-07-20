angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

  $scope.doDashRefresh=function(){
    $scope.$broadcast('scroll.refreshComplete');
  };

  $scope.dashLoadMore=function(){
    $scope.$broadcast('scroll.infiniteScrollComplete');
  };

  $scope.dashNoMoreData=function(){

  };

  $scope.$on('$stateChangeSuccess',function(){
    $scope.dashLoadMore();
  });

})

.controller('MessagesCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('SearchCtrl',function(){

})

.controller('PostCtrl',function($scope,$ionicModal){

})

.controller('TabsCtrl',function($scope,$ionicTabsDelegate,$ionicModal,$ionicPopup,$timeout){

  $ionicModal.fromTemplateUrl('templates/tab-post.html',{
    scope:$scope,
    animation:'slide-in-up'
  }).then(function(modal){
    $scope.modal=modal;
  });

  $scope.openModal=function(){
    $scope.modal.show();
    $scope.selectTabWithIndex(0);
  };

  $scope.closeModal=function(){
    $scope.modal.hide();
  }

  $scope.selectTabWithIndex=function(index) {
    $ionicTabsDelegate.select(index);
  }

  $scope.Submit=function(){
    $scope.closeModal();
  };

})

.controller('TabPostCtrl',function($scope){
  
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
