module.exports = function($scope, $stateParams, WeatherService) {
    var cityName = $stateParams.city;
    $scope.loading = true;
    $scope.markers = [];
    $scope.infoWeather = function(){
        WeatherService.info(cityName).success(function(city){
            $scope.loading = false;
            $scope.markers.push({
                name: city.name,
                lat : city.coord.lat,
                lon : city.coord.lon
            });
            $scope.city = city;
        })
    }
    $scope.infoWeather();

    // current location
    $scope.loc = { lat: 46.2157467, lon: 2.2088257 };

}
