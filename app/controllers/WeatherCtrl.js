module.exports = function($scope, $stateParams, WeatherService) {
    var city = $stateParams.city;
    $scope.loading = true;
    $scope.infoWeather = function(){
        WeatherService.info(city).success(function(data){
            $scope.loading = false;
            $scope.city = data;
        })
    }
    $scope.infoWeather();
}
