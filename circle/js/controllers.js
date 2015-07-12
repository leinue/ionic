angular.module('starter.controllers',[])

.controller('ProfileBoard',function($scope){

	alert('sddss');

})

.controller('ActionSheetCtrl',function($scope,$ionicActionSheet){
  
  $scope.showActionSheet=function(){

    $ionicActionSheet.show({
      buttons:[
        {text:'<b>About this Background</b>'},
        {text:'move'}
      ],
      destructiveText:'Delete',
      titleText:'modify your album',
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
