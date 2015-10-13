angular.module("starter")
.controller("LoginCtrl", function($scope, $state, $rootScope){

  $scope.data = JSON.parse(window.localStorage['usuario'] || '{}');

  $rootScope.$on('$cordovaPush:tokenReceived', function(event, data) {
    console.log('Got token', data.token, data.platform);
    // Do something with the token
  });

  $scope.irInicio = function(){

  }

  $scope.signupEmail = function(){

    //Create a new user on Parse
    var user = new Parse.User();
    user.set("username", $scope.data.username);
    user.set("password", $scope.data.password);
    user.set("email", $scope.data.email);

    // other fields can be set just like with Parse.Object
    user.set("somethingelse", "like this!");

    user.signUp(null, {
      success: function(user) {
        window.localStorage['usuario'] = JSON.stringify(user);
        $state.go("login")
      },
      error: function(user, error) {
        // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
      }
    });

  };

  $scope.loginEmail = function(){
    Parse.User.logIn($scope.data.username, $scope.data.password, {
      success: function(user) {
        window.localStorage['usuario'] = JSON.stringify(user);
        ionicUser();
        $state.go("app.home");
      },
      error: function(user, error) {
        // The login failed. Check error to see why.
        alert("error!");
      }
    });
  };

  function ionicUser(){
    Ionic.io();

    config = { "ios": { "badge": true, "sound": true }, "android": { "iconColor": "#343434" } };

    var push = new Ionic.Push({
      "debug": true,
      "onNotification" : function(notification){
         alert(notification);
      },
      "pluginConfig": config,
    });
    var user = Ionic.User.current();

    if (!user.id) {
      user.id = Parse.User.current().get("username");
    }

    user.save();

    var callback = function(data) {
       console.log('Registered token:', data.token);
       console.log(data.token);
       push.addTokenToUser(user);
       user.save();
    }
    push.register(callback);

  }

})
