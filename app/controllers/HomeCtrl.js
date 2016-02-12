module.exports = function($scope, $stateParams, CityService) {
    $scope.query = "";
    $scope.loading = true;
    $scope.cities = [];
    $scope.load = function(){
        $scope.loading = true;
        CityService.search($scope.query).success(function(data){
            $scope.loading = false;
            $scope.cities = data.results;
        });
    };
}