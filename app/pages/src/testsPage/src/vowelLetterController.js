(function () {

    'use strict';

    myApp.controller('vowelLetterController', vowelLetterController);
    
    vowelLetterController.$inject = ['$scope','$timeout'];
    
    function vowelLetterController($scope, $timeout) { 
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
            if (validateForm()) { 
                console.log("form has been submitted");
                var T2 = outputDataFormat();
                console.log(T2);
            } else { 
                showInvalidMessage();
                console.log("form hasn't been submitted");
            }
        
        }
        
        function validateForm() { 
            if ($scope.selectedPosButton == -1 || $scope.selectedNegButton == -1) { 
                return false;
            }
            var selectedLettersLength = $scope.selectedColors.length;
            for (var j = 0; j < selectedLettersLength ; j++ ) { 
                if ($scope.selectedColors[j] == undefined ) { 
                    return false;
                } 
            }

            return true;
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