'use strict';

myApp.controller('mainPageController', ['$scope','$state', 'loadingMaskService', '$window', '$translate', function ($scope, $state, loadingMaskService, $window, $translate) {
    
    
    var updateHasPendingRequestStatus = function() { 
        $scope.hasPendingRequests = loadingMaskService.hasPendingRequests;   
    }
    loadingMaskService.registerObserver(updateHasPendingRequestStatus);
    
    
    $scope.sendRequest = loadingMaskService.sendRequest;
    $scope.sendRequest();
    $state.go('mainPageState.userProfile');
    
    
    $scope.logOut = function () {
        if (confirm("Are you sure you want to log out?")) { 
            localStorage.removeItem("userInfo");
            $window.location.href = "/";
        }
    }
    
    $scope.changeLanguage = function(language) { 
        $translate.use(language);
    }
    
}]);