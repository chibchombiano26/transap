angular.module("transap")
.directive('indicadores', function(){
    
    var directiva = {};
    
    directiva.restrict = "E";
    directiva.templateUrl = "js/directivas/templates/indicadores.html";
    directiva.controller = "indicadoresCtrl";
    
    directiva.link = function(scope, element, attrs){
        
    }
    
    
    return directiva;
})

.controller('indicadoresCtrl', function($scope, importIoService){
    
    $scope.data = [];
    
    function inicializar(){
     var url = "https://api.import.io/store/data/9b86466d-5787-4d97-85f0-148591847b21/_query?input/webpage/url=http%3A%2F%2Fwww.dinero.com%2Findicadores&_user=dacf9cba-93b8-4f0a-a977-c3691b380e82&_apikey=dacf9cba93b84f0aa977c3691b380e82dcd40f0b7e95e1f186a34c7121579b5259f5bc581e92566da0814fbe39450a476af83d6c5457efc5c4c0420765573a281dde9f1ae527076cf3670b4fd67caefc";
     importIoService.readUrl(url).then(function(data){
         $scope.data = data;
     })
   }
 
 
  inicializar();
    
})