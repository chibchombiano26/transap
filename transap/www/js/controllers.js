angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})



.controller('homeCtrl', function($scope, $stateParams) {
})


.controller('PushController', function($scope){
  
  Ionic.io();

  var push = new Ionic.Push({
    "debug": true,
    "onNotification": function(notification) {
      debugger
      var payload = notification.payload;
      console.log(notification, payload);
    },
    "onRegister": function(data) {
      console.log(data.token);
    }
  });
  
  
})
