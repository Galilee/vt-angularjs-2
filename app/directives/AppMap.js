module.exports = function() {
    return {
        restrict: "E",
        replace: true,
        template: "<div id='map'></div>",
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

            map = new google.maps.Map(element[0], options);

            // @todo finalise markers :( not ready for demo
            scope.$watch("markers", function (newMarkers, oldMarkers) {
                angular.forEach(newMarkers, function(marker, key){
                    var loc = new google.maps.LatLng(marker.lat, marker.lon);
                    var marker = new google.maps.Marker({ position: loc, map: map, title: marker.name });
                });
            });

            function getLocation(loc) {
                if (loc == null) return new google.maps.LatLng(40, -73);
                if (angular.isString(loc)) loc = scope.$eval(loc);
                return new google.maps.LatLng(loc.lat, loc.lon);
            }
        }
    };
}
