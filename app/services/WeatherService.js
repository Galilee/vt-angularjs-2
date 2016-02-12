
module.exports = function ($http, API_WEATHER_HOST, API_WEATHER_KEY) {
    return{
        info: function(city){
            return $http.get(API_WEATHER_HOST+'?APPID='+API_WEATHER_KEY+'&q=' + city+'&lang=fr&units=metric');
        }
    }
}