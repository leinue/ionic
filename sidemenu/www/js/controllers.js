angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('RootCtrl',function($scope,$ionicSideMenuDelegate){
  /*$scope.toggleLeftSideMenu=function(){
    $ionicSideMenuDelegate.toggleLeft();
  };*/
})

.controller('HomeRootCtrl',function($scope,$ionicModal,$timeout){

  $ionicModal.fromTemplateUrl('templates/home/NewMessage.html',{
    scope:$scope
  }).then(function(modal) {
    $scope.modal = modal;
  });
  
  $scope.onRefresh=function(){
    console.log(';fddf');
    $scope.$broadcast('scroll.refreshComplete');
  };

  $scope.NewMessage=function(){
    $scope.modal.show();
  };

  $scope.CloseNewMessage=function(){
    $scope.modal.hide();
  }

})

.controller('HomeCtrl',function($scope){

})

.controller('MessageCtrl',function($scope){

})

.controller('ProfileCtrl',function($scope){

})

.controller('BackdropCtrl',function($scope,$ionicBackdrop,$timeout){

  $scope.action=function(){
    $ionicBackdrop.retain();
    $timeout(function(){
      $ionicBackdrop.release();
    },1000);
  };

})

.controller('OnHoldCtrl',function($scope,$ionicPopover){
  
  $scope.onHold=function(){

    //from template

    var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';
    $scope.popover=$ionicPopover.fromTemplate(template,{
      scope:$scope
    });

    //from templateurl

    // $ionicPopover.fromTemplateUrl('mypopover.html',{
    //   scope:$scope
    // }).then(function(popover){
    //   $scope.popover=popover;
    // });

    $scope.openPopover=function($event){
      $scope.popover.show($event);
    };

    $scope.closePopover=function(){
      $scope.popover.hide();
    };

    $scope.$on('$destory',function(){

    });

    $scope.$on('popover.removed',function(){

    });

    $scope.openPopover();

  }

})

.controller('PopupCtrl',function($scope,$ionicPopup){

  $scope.showAlert=function(){
    var alertPopup=$ionicPopup.alert({
      title:"dont eat that",
      template:'23333333'
    });
    alertPopup.then(function(res){
      console.log('then..');
    });
  };

  $scope.showConfirm=function(){
    var confirmPopup=$ionicPopup.confirm({
      title:"whatever",
      template:'just a test'
    });
    confirmPopup.then(function(res){
      if(res){
        console.log('233');
      }else{
        console.log('sdsds');
      }
    });
  };

  $scope.showInput=function(){
    $ionicPopup.prompt({
      title: 'Password Check',
      template: 'Enter your secret password',
      inputType: 'password',
      inputPlaceholder: 'Your password'
    }).then(function(res) {
      console.log('Your password is', res);
    });
  };

})

.controller('ListCtrl',function($scope){
  
  $scope.items=['fucker','bitch','shit','poo'];
  for (var i = 0; i < 10; i++) {
    $scope.items.push(i);
  };

  $scope.shouldShowDelete=false;
  $scope.shouldShowReorder=false;
  $scope.listCanSwipe=true;

  $scope.reorderItem=function(item,$fromIndex,$toIndex){
    $scope.items.splice($fromIndex,1);
    $scope.items.splice($toIndex,0,item);
  }

})

.controller('LoadingCtrl',function($scope,$ionicLoading,$timeout){
  
  $scope.show=function(){
    $ionicLoading.show({
      template:'loading...'
    });
  }

  $scope.hide=function(){
    $ionicLoading.hide();
  }

  $scope.show();

  $timeout(function(){
    $scope.hide();
  },1500);
})

.controller('ActionSheetCtrl',function($scope,$ionicActionSheet){
  
  $scope.showActionSheet=function(){

    $ionicActionSheet.show({
      buttons:[
        {text:'Modify'}
      ],
      destructiveText:'Delete',
      titleText:'<b>About this Background</b>',
      cancelText:'Cancel',
      cancel:function(){
        console.log('cancel');
      },
      buttonClicked:function(index){
        console.log('button clicked',index);
        return true;
      },
      destructiveButtonClicked:function(){
        console.log('destructive');
        return true;
      }
    });

  };

});
