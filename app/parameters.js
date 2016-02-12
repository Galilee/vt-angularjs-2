require('angular');

module.exports =
    angular.module('app')
        .constant("API_WEATHER_HOST", "http://api.openweathermap.org/data/2.5/weather")
        .constant("API_WEATHER_KEY", "d7d802efaa317a35c426100c8535c7f4")
        .constant("API_CITY_HOST", "http://www.citysearch-api.com/fr/city")
        .constant("API_CITY_KEY", "so26789c276801562eda64badc80e319ebb67e58c2")
        .constant("API_CITY_LOGIN", "tarek-rjili");
