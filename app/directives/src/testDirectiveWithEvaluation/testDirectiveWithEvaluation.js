(function () {
    'use strict';

    myApp.directive('testDirectiveWithEvaluation', testDirective);

    testDirective.$inject = ['preferencesService', '$timeout', 'testDataService', 'CONSTANTS'];
    
    function testDirective(preferencesService, $timeout, testDataService, CONSTANTS) { // declaring directive
        var directive = {
            restrict: 'E', // allowed to use only as a element
            templateUrl: "app/directives/src/testDirectiveWithEvaluation/tpl/testDirectiveWithEvaluation.tpl.html",
            scope: {
                testName: "@",
                testDescription: "@",
                itemList: "=",
                titleList: "=",
                modalInstance: "=",
                
            },
            controller: controllerFunc
        };

        return directive;

        function controllerFunc($scope) {
            $scope.submitForm = submitForm;
            $scope.isValid = true;
            $scope.grades = [];
            
            function submitForm() {
                if ($scope[$scope.testName].$valid) {
                    var userInfo = JSON.parse(localStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEY));
                    testDataService(userInfo.email, $scope.testName, $scope.grades).then(function successCallback(response) {
                        $scope.modalInstance.close();
                    }, function errorCallback(response) {
                        throw "request failed";
                    });
                } else { 
                    showInvalidMessage();
                }
            }
            
            $scope.range = rangeFnc;
            
            function showInvalidMessage() {
                $scope.isValid = false;
                $timeout(function() {
                    $scope.isValid = true;
                },3000)
            }
            
            function rangeFnc(n) {
                return new Array(n);
            };

        }

    };

})();