'use strict';

myApp.controller('loginController', ['$scope', 'loginService', 'resetPasswordService', '$translate', '$state', function ($scope, loginService, resetPasswordService, $translate, $state) {
    $scope.emailHasBeenSent = resetPasswordService.emailHasBeenSent;
    
    $scope.loginFailed = false;
    
    var updateEmailHasBeenSentStatus = function() { 
        $scope.emailHasBeenSent = resetPasswordService.emailHasBeenSent;   
    }
    resetPasswordService.registerObserver(updateEmailHasBeenSentStatus);
    
    $scope.submit = function() { 
        loginService($scope.email, $scope.password).then(function successCallback(response) {
            if (!_.isEmpty(response.data)) {
                localStorage.setItem("userInfo", JSON.stringify(response.data));
                $state.go('mainPageState');
            } else { 
                $scope.loginFailed = true;
            }
        }, function errorCallback(response) {
            throw "request failed";
        });
        
    }
    $scope.changeLanguage = function(language) { 
        $translate.use(language);
    }
}]);