(function () {

    'use strict';

    myApp.controller('troubleShootingController', troubleShootingController);
    
    troubleShootingController.$inject = ['$scope', '$timeout', 'testDataService', 'CONSTANTS', '$uibModalInstance'];
    
    function troubleShootingController($scope, $timeout, testDataService, CONSTANTS, $uibModalInstance) { 
        $scope.troubleList = ['Жду быстрых результатов',
                              'Перестаю верить в себя',
                              'Застреваю в прошлом',
                              'Зацикливаюсь в своих ошибках',
                              'Боюсь будущего',
                              'Пропивлюсь переменам',
                              'Быстро опускаю руки',
                              'Считаю себя слабым',
                              'Думаю, что мир мне чем-то обязан',
                              'Страх перед неудачей больше, чем жажда успеха',
                              'Не прдставляю себе всех своих возможностей', 
                              'Чувствую, что мне есть что терять',
                              'Решение проблем требует слишком много работы',
                              'Считаю свою проблему уникальной, поэтому неразрешимой',
                              'Неудача для меня – сигнал к отступлению',
                              'Жалею себя'];
        $scope.isValid = true;
        $scope.invalidMessage = "";
        $scope.submitForm = submitForm;
        $scope.arrButtons = [[],[]];
        $scope.setButton = setButton;
        $scope.testName = "troubleshooting";

        
        function submitForm() { 
            if (getLength($scope.arrButtons[0]) == 5 && getLength($scope.arrButtons[1]) == 5) {
                var userInfo = JSON.parse(localStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEY));
                testDataService(userInfo.email, $scope.testName, $scope.arrButtons).then(function successCallback(response) {
                    $uibModalInstance.close();
                }, function errorCallback(response) {
                    throw "request failed";
                });
            } else {
                showInvalidMessage("Вы отметили недостаточно пунктов. Читайте описание выше"); 
            }
            
        }
        
        function setButton(arrIndex, btnIndex) { 
            var selected = $scope.arrButtons[arrIndex][btnIndex]; 
            if (getLength($scope.arrButtons[arrIndex]) <= 4 || selected) { 
                if (selected) {
                    $scope.arrButtons[arrIndex][btnIndex] = false;
                } else { 
                    $scope.arrButtons[arrIndex][btnIndex] = true;
                }
            } else {
                showInvalidMessage("Вы можете отметить только пять пунктов. Для того, чтобы снять пункт, нажмите еще раз нажатую кнопку"); 
            }
        }
        
        
        function getLength(arr) { 
            var length = 0;
            for (var item in arr) { 
                if (arr[item]) { 
                    length ++;
                }
            }
            return length;
        }
        
        function showInvalidMessage(message) {
            $scope.invalidMessage = message;
            $scope.isValid = false;
            $timeout(function() {
                $scope.isValid = true;
                $scope.invalidMessage = "";
            },3000)
        }
    }

})();