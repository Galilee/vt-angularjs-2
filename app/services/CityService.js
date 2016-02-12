
module.exports = function ($http, API_CITY_HOST, API_CITY_KEY, API_CITY_LOGIN) {
    return{
        search: function(query){
            return $http.get(API_CITY_HOST+'?apikey='+API_CITY_KEY+'&login=' + API_CITY_LOGIN+'&ville='+query);
        }
    }
}