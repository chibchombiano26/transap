angular.module('transap', [])

angular.module("transap")
.service("importIoService", function($q){
    
    var dataFactory ={};
    
    
    dataFactory.readUrl = function(url){
        
		var deferred = $q.defer();

		$.ajax({
		  dataType: "json",
		  url: url,		  
		  success: function(e){
		  	deferred.resolve(e.results);
		  }
		});	

        return deferred.promise;
	}
    
    
    return dataFactory;
    
    
})