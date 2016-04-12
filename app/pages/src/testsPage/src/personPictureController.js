(function () {

    'use strict';

    myApp.controller('personPictureController', personPictureController);
    
    personPictureController.$inject = ['$scope', '$timeout', 'testDataService', 'CONSTANTS', '$uibModalInstance'];
    
    function personPictureController($scope, $timeout, testDataService, CONSTANTS, $uibModalInstance) { 
        
        $scope.shapes = ['Круги','Прямоугольники','Треугольники'];
        $scope.testName = "person_picture_test";
        $scope.submitForm = submitForm;
        $scope.numShapes = [];
        $scope.isValid = true;
        
        function submitForm() {
            if (isValid()) {
                var userInfo = JSON.parse(localStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEY));
                testDataService(userInfo.email, $scope.testName, $scope.numShapes).then(function successCallback(response) {
                    $uibModalInstance.close();
                }, function errorCallback(response) {
                    throw "request failed";
                });   
            } else { 
                showInvalidMessage();
            }
            
        }
        
        function isValid() { 
            var sum = 0;
            var valid = false;
            for (var i = 0; i<$scope.shapes.length ; i++) { 
                sum += $scope.numShapes[i];
            }
            if (sum >= 8 && sum <= 15) {
                valid = true;
            }
            return valid;
        }  
        
        function showInvalidMessage() {
            $scope.isValid = false;
            $timeout(function() {
                $scope.isValid = true;
            },3000)
        }
    }

})();