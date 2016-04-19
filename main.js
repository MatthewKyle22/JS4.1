angular.module('toggle', []);
    

angular.module('toggle')
    .controller('AppCtrl', ['$scope', function($scope) {
         $scope.custom = true;
          $scope.toggleCustom = function () {
        $scope.custom = !$scope.custom;
    };
}]);
    