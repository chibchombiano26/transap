angular.module("starter")
.controller("enlaceCtrl", function($scope, $cordovaCamera, $cordovaMedia){
    
      var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
      correctOrientation:true
    };
    
    
    
    $scope.recordAudio = function() {
        var src = "myrecording.mp3";
        var mediaRec = new Media(src,
        // success callback
        function() {
            console.log("recordAudio():Audio Success");
        },

        // error callback
        function(err) {
            console.log("recordAudio():Audio Error: "+ err.code);
        });

        // Record audio
        mediaRec.startRecord();
    }
    
    $scope.takePicture = function(){
        $cordovaCamera.getPicture(options).then(function(imageData){
            //var image = document.getElementById('myImage');
            //image.src = "data:image/jpeg;base64," + imageData;
        }, function(error){
            console.log(error);
        });
    }
    
})