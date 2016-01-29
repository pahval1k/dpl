'use strict';

myApp.controller('loginController', ['$scope', 'loginService', 'resetPasswordService', '$translate', '$state','CONSTANTS', function ($scope, loginService, resetPasswordService, $translate, $state, CONSTANTS) {
    $scope.emailHasBeenSent = resetPasswordService.emailHasBeenSent;
    
    $scope.loginFailed = false;
    
    var updateEmailHasBeenSentStatus = function() { 
        $scope.emailHasBeenSent = resetPasswordService.emailHasBeenSent;   
    }
    resetPasswordService.registerObserver(updateEmailHasBeenSentStatus);
    
    $scope.submit = function() { 
        loginService($scope.email, $scope.password).then(function successCallback(response) {
            if (!_.isEmpty(response.data)) {
                localStorage.setItem(CONSTANTS.LOCAL_STORAGE_KEY, JSON.stringify(response.data));
                $state.go('mainPageState.userProfile');
            } else { 
                $scope.loginFailed = true;
            }
        }, function errorCallback(response) {
            throw "request failed";
        });
        
    }
}]);