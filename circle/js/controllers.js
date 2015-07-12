angular.module('starter',['ionic'])

.controller('ProfileCtrl',function($scope){

	alert('sddss');

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
