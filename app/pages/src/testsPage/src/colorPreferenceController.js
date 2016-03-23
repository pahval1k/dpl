(function () {

    'use strict';

    myApp.controller('colorPreferenceController', colorPreferenceController);
    
    colorPreferenceController.$inject = ['$scope', '$timeout'];
    
    function colorPreferenceController($scope, $timeout) { 
        $scope.colorsList = [ 
            ['Красный', 'Оранжевый', 'Желтый','Зеленый', 'Голубой', 'Синий', 'Фиолетовый'],
            ['Черный','Белый','Коричневый','Розовый','Серебристо-серый'] 
        ];
        $scope.gradations = ['red','white','green'];
        $scope.selectColor = selectColor;
        $scope.selectNegativeColor = selectNegativeColor;
        $scope.selectPositiveColor = selectPositiveColor;
        $scope.selectedColors = [[],[]];
        $scope.selectedPosButton = [];
        $scope.selectedNegButton = [];
        $scope.submitForm = submitForm
        $scope.isValid = true;
        
        function selectColor(tableIndex, colorIndex, gradationIndex) {
            if (!$scope.selectedColors[tableIndex]) { 
              $scope.selectedColors[tableIndex] = [];  
            }
            $scope.selectedColors[tableIndex][colorIndex] = gradationIndex;
        }
        
        function selectNegativeColor(index, listIndex) { 
            $scope.selectedNegButton[listIndex] = index;
        }
        
        function selectPositiveColor(index, listIndex) {
            $scope.selectedPosButton[listIndex] = index;
        }
        
        function submitForm() { 
            if (validateForm()) { 
                console.log("form has been submitted");
                var T1 = outputDataFormat();
                console.log(T1);
            } else { 
                showInvalidMessage();
                console.log("form hasn't been submitted");
            }
        }
        
        function outputDataFormat() { 
            var colorListLength = $scope.colorsList.length;
            var T1 = [];
            var outputIndex = 0;
            for (var i = 0; i < colorListLength ; i ++ ) { 
                for (var j = 0; j < $scope.colorsList[i].length ; j++ ) { 
                    T1[outputIndex] = $scope.selectedColors[i][j] - 1;
                    outputIndex ++;
                }
            }
            T1[outputIndex] = $scope.selectedPosButton[0] + 1;
            outputIndex ++;
            T1[outputIndex] = $scope.selectedPosButton[1] + 1;
            outputIndex ++;
            T1[outputIndex] = $scope.selectedNegButton[0] + 1;
            outputIndex ++;
            T1[outputIndex] = $scope.selectedNegButton[1] + 1;
            return T1;
        }
        
        function showInvalidMessage() { 
            $scope.isValid = false;
            $timeout(function() { 
                $scope.isValid = true;
            },3000)
        }
        
        function validateForm() { 
            var colorListLength = $scope.colorsList.length;
            for (var i = 0; i < colorListLength ; i ++ ) { 
                if ($scope.selectedPosButton[i] == undefined || $scope.selectedNegButton[i] == undefined) { 
                    return false;
                }
                for (var j = 0; j < $scope.colorsList[i].length ; j++ ) { 
                    if ($scope.selectedColors[i] == undefined ) { 
                        return false;
                    } else if ($scope.selectedColors[i][j] == undefined) { 
                        return false;
                    }
                }
            }
            return true;
        }
    }

})();