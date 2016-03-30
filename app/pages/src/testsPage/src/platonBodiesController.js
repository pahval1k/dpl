(function () {

    'use strict';

    myApp.controller('platonBodiesController', platonBodiesController);
    
    platonBodiesController.$inject = ['$scope','preferencesService', '$timeout'];
    
    function platonBodiesController($scope, preferencesService, $timeout) { 
        $scope.bodyList = [{
            name: "Икосаэдр",
            imgPath: "app/common/images/ikosaedr.png"
        },{
            name: "Октаэдр",
            imgPath: "app/common/images/oktaedr.png"
        },{
            name: "Гексаедр (куб)",
            imgPath: "app/common/images/geksaedr.png"
        },{
            name: "Тэтраэдр",
            imgPath: "app/common/images/tetraedr.png"
        },{
            name: "Додекаедр",
            imgPath: "app/common/images/dodekaedr.png"
        },{
            name: "Сфера с точкой",
            imgPath: "app/common/images/spherewithpoint.png"
        }];
        
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