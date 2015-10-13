angular.module("starter")
.controller("enlaceCtrl", function($scope, $cordovaCamera, $cordovaMedia, $state){

    var options = {
      quality: 70,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 300,
      targetHeight: 300,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
      correctOrientation:true
    };

    var mediaRec;
    $scope.estadoAudio = "";
    $scope.showAudio = false;


    $scope.solicitar = function(){
      $state.go("app.success");
    }

    $scope.stopRecord = function(){
      $scope.estadoAudio = "";
      mediaRec.stopRecord();
    }

    $scope.reproducir = function(){
      mediaRec.play();
    }

    $scope.recordAudio = function() {
      var src = "myrecording.mp3";
      mediaRec = new Media(src,
          // success callback
          function() {
              console.log("recordAudio():Audio Success");
          },

          // error callback
          function(err) {
              console.log("recordAudio():Audio Error: "+ err.code);
          }
      );

      // Record audio
      mediaRec.startRecord();
      $scope.showAudio = true;
      $scope.estadoAudio = "Grabando...";

      // Stop recording after 10 seconds
      setTimeout(function() {
          mediaRec.stopRecord();
          $scope.estadoAudio = "";
      }, 60000);
    }

    $scope.takePicture = function(){
        $cordovaCamera.getPicture(options).then(function(imageData){
            $scope.imagen = "data:image/jpeg;base64," + imageData;
            $scope.showImage = true;
        }, function(error){
            console.log(error);
        });
    }

})
