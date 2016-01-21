'use strict';

myApp.controller('resetPasswordController', ['$scope', '$state', 'resetPasswordService', '$timeout', function ($scope, $state, resetPasswordService, $timeout) {
    $scope.email = "";
    $scope.submit = function() { 
        // ... logic to reset password
        resetPasswordService.sendEmail();
        $state.go("loginPageState");
    }
}]);