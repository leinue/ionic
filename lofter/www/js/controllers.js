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

  $scope.doMessagesRefresh=function(){
    $scope.$broadcast('scroll.refreshComplete');
  };

  $scope.MessagesLoadMore=function(){
    $scope.$broadcast('scroll.infiniteScrollComplete');
  };

  $scope.MessagesNoMoreData=function(){

  };

  $scope.$on('$stateChangeSuccess',function(){
    $scope.MessagesLoadMore();
  });

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };

})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, $ionicModal) {

  $scope.chat = Chats.get($stateParams.chatId);

  $ionicModal.fromTemplateUrl('templates/post-detail.html',{
    scope:$scope,
    animation:'slide-in-up'
  }).then(function(modal){
    $scope.modal=modal;
  });

  $scope.openModal=function(){
    $scope.modal.show();
  };

  $scope.closeModal=function(){
    $scope.modal.hide();
  };

  $scope.toTabMsgsDetail=function(){
    $scope.openModal();
  };

  $scope.doDetailsRefresh=function(){
    $scope.$broadcast('scroll.refreshComplete');
  };

})

.controller('PostDetailCtrl',function($scope){
  console.log('dsds');
})

.controller('TestCtrl',function($scope){
  console.log('dsjn');
})


.controller('SearchCtrl',function($scope){

  $scope.doSearchRefresh=function(){
    $scope.$broadcast('scroll.refreshComplete');
  };

  $scope.searchLoadMore=function(){
    $scope.$broadcast('scroll.infiniteScrollComplete');
  };

  $scope.searchNoMoreData=function(){

  };

  $scope.$on('$stateChangeSuccess',function(){
    $scope.searchLoadMore();
  });

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
    $scope.selectTabWithIndex($ionicTabsDelegate.selectedIndex());
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

  $scope.handleMomentsEvents=function(){
    console.log('dssd');
  };

})

.controller('TabPostCtrl',function($scope){
  
})

.controller('AccountCtrl', function($scope,$ionicPopup) {
  
  $scope.account = {
    email:'597055914@qq.com',
    sex:'男',
    region:'china',
    intro:'fuck you bitch'
  };

  $scope.doAccountRefresh=function(){
    $scope.$broadcast('scroll.refreshComplete');
  };

  $scope.chooseGender = function() {
    $scope.data = {
      male:{
        isChecked:false,
        value:"男"
      },
      female:{
        isChecked:false,
        value:"女"
      },
      noSex:{
        isChecked:false,
        value:"第三性别"
      }
    }

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      template: '<div class="list"> <label class="item item-radio"> <input ng-model="data.male.isChecked" type="radio" name="group"> <div class="item-content"> 男 </div> <i class="radio-icon ion-checkmark"></i> </label> <label class="item item-radio"> <input ng-model="data.female.isChecked" type="radio" name="group"> <div class="item-content"> 女 </div> <i class="radio-icon ion-checkmark"></i> </label> <label class="item item-radio"> <input ng-model="data.noSex.isChecked" type="radio" name="group"> <div class="item-content"> 第三性别 </div> <i class="radio-icon ion-checkmark"></i> </label> </div>', 
      title: '请选择',
      subTitle: '',
      scope: $scope,
      buttons: [
        { text: 'Cancel' },
        {
          text: '<b>Save</b>',
          type: 'button-positive',
          onTap: function(e) {
            console.log($scope.data.male.isChecked);
            if($scope.data.male.isChecked==undefined){
              return $scope.data.male.value;
            }else if($scope.data.female.isChecked==undefined){
              return $scope.data.female.value;
            }else{
              return $scope.data.noSex.value;
            }
          }
        }
      ]
      });
      myPopup.then(function(res) {
        console.log('Tapped!', res);
        $scope.


        account.sex=res;
      });
  };

  $scope.fillEmail = function() {
    $scope.emailData = {}

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      template: '<input type="email" ng-model="account.email">',
      title: 'Enter email',
      subTitle: '',
      scope: $scope,
      buttons: [
        { text: 'Cancel' },
        {
          text: '<b>Save</b>',
          type: 'button-positive',
          onTap: function(e) {
            if (!$scope.account.email) {
              //don't allow the user to close unless he enters wifi password
              e.preventDefault();
            } else {
              return $scope.account.email;
            }
          }
        }
      ]
    });
    myPopup.then(function(res) {
      console.log('Tapped!', res);
    });
   };

  $scope.fillRegion = function() {
    $scope.regionData = {}

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      template: '<input type="text" ng-model="account.region">',
      title: 'Enter region',
      subTitle: '',
      scope: $scope,
      buttons: [
        { text: 'Cancel' },
        {
          text: '<b>Save</b>',
          type: 'button-positive',
          onTap: function(e) {
            if (!$scope.account.region) {
              //don't allow the user to close unless he enters wifi password
              e.preventDefault();
            } else {
              return $scope.account.region;
            }
          }
        }
      ]
    });
    myPopup.then(function(res) {
      console.log('Tapped!', res);
    });
   };

  $scope.fillIntro = function() {
    $scope.introData = {}

    // An elaborate, custom popup
    var myPopup = $ionicPopup.show({
      template: '<input type="text" ng-model="account.intro">',
      title: "What's up",
      subTitle: '',
      scope: $scope,
      buttons: [
        { text: 'Cancel' },
        {
          text: '<b>Save</b>',
          type: 'button-positive',
          onTap: function(e) {
            if (!$scope.account.intro) {
              //don't allow the user to close unless he enters wifi password
              e.preventDefault();
            } else {
              return $scope.account.intro;
            }
          }
        }
      ]
    });
    myPopup.then(function(res) {
      console.log('Tapped!', res);
    });
   };

})

.controller('AccountSettingCtrl',function($scope,$ionicModal){
  
  $ionicModal.fromTemplateUrl('/templates/account/about.modal.html',{
    scope:$scope,
    animation:'slide-in-up'
  }).then(function(modal){
    $scope.aboutModal=modal;
  });

  $scope.openAboutModal=function(){
   $scope.aboutModal.show(); 
  }

  $scope.closeAboutModal=function(){
    $scope.aboutModal.hide();
  }


  $ionicModal.fromTemplateUrl('/templates/account/feedback.modal.html',{
    scope:$scope,
    animation:'slide-in-up'
  }).then(function(modal){
    $scope.feedbackModal=modal;
  });

  $scope.openFeedbackModal=function(){
    $scope.feedbackModal.show();
  }

  $scope.closeFeedbackModal=function(){
    $scope.feedbackModal.hide();
  }

})

;
