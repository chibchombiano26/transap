angular.module("transap")
.directive('portafolio', function(){
    
    var directiva = {};
    
    directiva.restrict = "E";
    directiva.templateUrl = "js/directivas/templates/portafolio.html";
    directiva.controller = "portafolioCtrl";
    directiva.scope =  {
        source : '='
    }
    
    directiva.link = function(scope, element, attrs){
        
    }
    
    
    return directiva;
})

.controller('portafolioCtrl', function($scope, importIoService){
    
    $scope.data = [];
    
    function inicializar(){
     var url = "https://api.import.io/store/data/0ef3ab9f-5928-461a-beed-9b0c2a1f64fc/_query?input/webpage/url=http%3A%2F%2Fwww.portafolio.co%2Feconomia&_user=dacf9cba-93b8-4f0a-a977-c3691b380e82&_apikey=dacf9cba93b84f0aa977c3691b380e82dcd40f0b7e95e1f186a34c7121579b5259f5bc581e92566da0814fbe39450a476af83d6c5457efc5c4c0420765573a281dde9f1ae527076cf3670b4fd67caefc";
     importIoService.readUrl(url).then(function(data){
         
         for (var i = 0; i < data.length; i++) {
             data[i]['tituloDesc'] = data[i]['titulo/_text'];
         }
         
         $scope.data = cargarSoloImagenes(data);
     })
   }
   
   function cargarSoloImagenes(array){
       var data = _.filter(array, function(item){
           return item.hasOwnProperty("imagen");
       })
       
       return data;
   }
   
   $scope.click = function(item){
       window.open(item.titulo, '_blank', 'location=yes');
   }
 
 
  inicializar();
    
})