module.exports = function() {
    return {
        restrict: "E",
        replace: true,
        template: "<div></div>",
        scope: {
            center: "=",
            markers: "="
        },
        link: function (scope, element, attrs) {

            var options = {
                center: new google.maps.LatLng(40, -73),
                zoom: 6,
                mapTypeId: "roadmap"
            };

            if (scope.center) options.center = getLocation(scope.center);

            // create the map
            map = new google.maps.Map(element[0], options);

            function getLocation(loc) {
                if (loc == null) return new google.maps.LatLng(40, -73);
                if (angular.isString(loc)) loc = scope.$eval(loc);
                return new google.maps.LatLng(loc.lat, loc.lon);
            }

            // @todo finalise markers :( not ready for demo
            scope.$watch("markers", function (newValue, old) {
                if (newValue.length > 0) {
                    console.log(newValue);
                    console.log(newValue);
                    var loc = new google.maps.LatLng(newValue[0].lat, newValue[0].lon);
                    var mm = new google.maps.Marker({ position: loc, map: map, title: newValue[0].name });
                }
            });

        }
    };
}
