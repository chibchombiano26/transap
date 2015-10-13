angular.module("starter")
.controller('GraphCtrl', function($scope) {
  $scope.graph = {};
  $scope.graph.data = [
    //Awake
    [16, 15, 20, 12, 16, 12, 8],
    //Asleep
    [8, 9, 4, 12, 8, 12, 14]
  ];
  $scope.graph.labels = ['Lun', 'Mar', 'Mier', 'Juev', 'Viern', 'Sab', 'Dom'];
  $scope.graph.series = ['realizado', 'esperado'];

});
