'use strict';

myApp.controller('registrationController', ['$scope', '$timeout', '$http', '$state', function ($scope, $timeout, $http, $state) {
    
    $scope.errorMessage = "";
    $scope.firstName = "";
    $scope.secondName = "";
    $scope.date = "";
    $scope.email = "";
    
    $scope.submit = function() {
        if (!($scope.firstPassword === $scope.secondPassword)) { 
            showErrorMessage("Пароли не совпадают. Введите пароль еще раз");
        } else if (!$scope.registrationForm.$valid) { 
            showErrorMessage("Введены неверные данные. убедитесь что все поля не подсвечены красным");
        } else { 
            $http({
              method: 'POST',
              url: '/userRegistration',
              data: {
                  firstName: $scope.firstName,
                  lastName: $scope.secondName,
                  birthDate: $scope.date,
                  email: $scope.email,
                  password: $scope.firstPassword
              }
            }).then(function successCallback(response) {
                if (response) { 
                    $state.go("loginPageState");
                }
                // this callback will be called asynchronously
                // when the response is available
            }, function errorCallback(response) {
                showErrorMessage("Произошла ошибка на сервере, попробуйте еще раз чуть позже");
            });
        }
    }
    
    function showErrorMessage(errorMessage) { 
        $scope.errorMessage = errorMessage;
        $timeout(function() {
            $scope.errorMessage = "";
        }, 3000);
    }
}]);