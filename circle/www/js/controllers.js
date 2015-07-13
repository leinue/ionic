angular.module('starter',['ionic'])

.controller('RootCtrl',function($scope){

})

.controller('HomeCtrl',function($scope){

})

.controller('MessageCtrl',function($scope){

})

.controller('ProfileCtrl',function($scope){

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
