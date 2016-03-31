(function () {

    'use strict';

    myApp.controller('vowelLetterController', vowelLetterController);
    
    vowelLetterController.$inject = ['$scope','$timeout','preferencesService','testDataService', 'CONSTANTS', '$uibModalInstance'];
    
    function vowelLetterController($scope, $timeout, preferencesService, testDataService, CONSTANTS, $uibModalInstance) {
        $scope.lettersList = ['а', 'о', 'у', 'ы', 'э', 'я', 'ё', 'ю', 'и', 'е'];
        $scope.gradations = ['red','white','green'];
        $scope.selectedColors = [];
        $scope.selectColor = selectColor;
        $scope.selectPositiveLetter = selectPositiveLetter;
        $scope.selectNegativeLetter = selectNegativeLetter;
        $scope.selectedPosButton = -1;
        $scope.selectedNegButton = -1;
        $scope.submitForm = submitForm;
        $scope.isValid = true;
        $scope.testName = "vowel_letters";
        
        function selectColor(letterIndex, gradationIndex) {
            $scope.selectedColors[letterIndex] = gradationIndex;
        }
        
        function selectNegativeLetter(index) { 
            $scope.selectedNegButton = index;
        }
        
        function selectPositiveLetter(index) {
            $scope.selectedPosButton = index;
        }
        
        function submitForm() {
            if (preferencesService.isFormValid($scope.selectedPosButton, $scope.selectedNegButton, $scope.selectedColors)) {
                console.log("form has been submitted");
                var T2 = outputDataFormat();
                var userInfo = JSON.parse(localStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEY));
                testDataService(userInfo.email, $scope.testName, T2).then(function successCallback(response) {
                    $uibModalInstance.close();
                }, function errorCallback(response) {
                    throw "request failed";
                });
                console.log(T2);
            } else {
                showInvalidMessage();
                console.log("form hasn't been submitted");
            }
        
        }

        
        function outputDataFormat() { 
            var selectedLettersLength = $scope.selectedColors.length;
            var T2 = [];
            var outputIndex = 0;
            for (var i = 0; i < selectedLettersLength ; i ++ ) { 
                T2[outputIndex] = $scope.selectedColors[i] - 1;
                outputIndex ++;
            }
            T2[outputIndex] = $scope.selectedPosButton + 1;
            outputIndex ++;
            T2[outputIndex] = $scope.selectedPosButton + 1;
            outputIndex ++;
            
            return T2;
        }
        
        function showInvalidMessage() { 
            $scope.isValid = false;
            $timeout(function() { 
                $scope.isValid = true;
            },3000)
        }
    }

})();