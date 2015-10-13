angular.module("starter")
.controller("successCtrl", function($scope, $state){

  $scope.irInicio = function(){
    $state.go("app.home");
  }


})
