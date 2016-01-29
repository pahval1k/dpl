myApp.service('coordinatesService', ['$http', function ($http) {
    return function (x0, y0, x1min, capacityY) {
        return $http({
            method: "POST",
            url: "/getGraphData",
            data: {
                x0: x0,
                y0: y0,
                x1min: x1min,
                capacityY: capacityY
            }
        });
    }
}]);