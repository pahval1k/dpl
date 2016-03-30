(function () {

    'use strict';

    myApp.controller('senseOrganController', senseOrganController);
    
    senseOrganController.$inject = ['$scope','preferencesService', '$timeout'];
    
    function senseOrganController($scope, preferencesService, $timeout) {
        $scope.senseList = ['слух', 'обоняние', 'осязание', 'вкус', 'зрение'];
        $scope.gradations = ['red','white','green'];
        $scope.selectedColors = [];
        $scope.selectColor = selectColor;
        $scope.selectPositiveLetter = selectPositiveLetter;
        $scope.selectNegativeLetter = selectNegativeLetter;
        $scope.selectedPosButton = -1;
        $scope.selectedNegButton = -1;
        $scope.isValid = true;
        $scope.submitForm = submitForm;


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
                //var T2 = outputDataFormat();
                //console.log(T2);
            } else {
                showInvalidMessage();
                console.log("form hasn't been submitted");
            }

        }

        function showInvalidMessage() {
            $scope.isValid = false;
            $timeout(function() {
                $scope.isValid = true;
            },3000)
        }
    }

})();