myApp.directive('svgGraph', ['coordinatesService', '$interval', '$document', function (coordinatesService, $interval, $document) {
    return {
        restrict: 'E', // allowed to use only as a element
        replace: true,
        templateUrl: "app/directives/src/svgGraph/tpl/svgGraphDirective.tpl.html",
        link: function (scope, element, attrs, ctrl) {

            // god, don't even try to understand this bunch of code. even author of this doesn't fully understand what's going on here 

            var x0 = 0,
                y0 = 0,
                x1 = 0,
                y1 = 0; // coordinates of lines
            var requestFailed = false; // state represents whether request to the server has been falled

            var distance = 0; // distance between x0:0 and x1 of the first line of the graph


            function shiftLines() { // shifts all lines back. 

                var lineLength = scope.lines.length;
                for (var i = 0; i < lineLength; i++) {
                    if (i == 0) {
                        distance = scope.lines[i].x1 - scope.lines[i].x0;
                        scope.pointsOffsetX += distance;
                        //pointsOffsetX = Infinity; // for infinity case
                    }
                    scope.lines[i].x0 -= distance;
                    scope.lines[i].x1 -= distance;

                }
                scope.lines.shift(); // remove first element
                x0 = scope.lines[scope.lines.length - 1].x0 - scope.XOffset;
                x1 = scope.lines[scope.lines.length - 1].x1 - scope.XOffset; // last x point of line

            }

            function resetGraph() {
                x0 = scope.XOffset;
                y0 = scope.YOffset;
                x1 = scope.XOffset;
                y1 = scope.YOffset;
                scope.pointsOffsetX = 0;
                scope.lines = [];
            }

            $interval(function () {

                // if request to the server has not been falled and if there are lines on graph. 
                if (scope.lines.length && !requestFailed) {
                    x0 = x1;
                    y0 = y1;
                }

                if (x1 > scope.lengthX) { // if there are no space to add new line on the graph
                    shiftLines();
                    //shiftPointsX(pointsOffsetX);
                    if (scope.pointsOffsetX == Infinity) {
                        alert("Your values reached Infinity");
                        resetGraph();
                    }
                } else { // else we get data from the server and display it on the graph
                    coordinatesService(x0, y0, x1, scope.lengthY).then(function successCallback(response) {
                        x1 = response.data.x1;
                        y1 = response.data.y1;
                        var line = addOffsetsIntoLine(response.data);
                        scope.lines.push(line);
                        requestFailed && (requestFailed = false);
                    }, function errorCallback(response) {
                        requestFailed = true;
                        throw "request failed";
                    });
                }

            }, 900);

            function addOffsetsIntoLine(line) { // adds appropriate offsets to every point of the line
                line.x0 += scope.XOffset;
                line.y0 += scope.YOffset;
                line.x1 += scope.XOffset;
                line.y1 += scope.YOffset;
                return line;

            }

        }
    };
}]);