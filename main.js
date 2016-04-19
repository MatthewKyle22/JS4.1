angular.module('toggle', []);
    

angular.module('toggle')
    .controller('AppCtrl', ['$scope', function($scope) {
         $scope.custom = true;
            $scope.toggleCustom = function () {
        $scope.custom = !$scope.custom;
    };
    //Part 4
        $scope.custom2 = true;
            $scope.toggleCustom2 = function () {
        $scope.custom2 = !$scope.custom2;
    };     
            $scope.changeColor = function () {
        $scope.custom3 = !$scope.custom3;
    };
}]);
    

$scope.changeColor = function(person, bool) {
    if(bool === true) {
        $scope.personColour = {color: '#'+person.colour};
    } else if (bool === false) {
        $scope.personColour = {color: 'white'}; //or, whatever the original color is
    }
};

