'use strict';

myApp.controller('mainPageController', ['$scope', '$state', 'loadingMaskService', '$window', '$translate', 'CONSTANTS', function ($scope, $state, loadingMaskService, $window, $translate, CONSTANTS) {


    var updateHasPendingRequestStatus = function () { // show or hide load mask on the page 
        $scope.hasPendingRequests = loadingMaskService.hasPendingRequests;
    }
    loadingMaskService.registerObserver(updateHasPendingRequestStatus);

    $scope.countdown = 0; // how many seconds session will be expired in 
    
    $scope.$state = $state;

    $scope.sendRequest = loadingMaskService.sendRequest; // emulates sending request to display load mask
    $scope.sendRequest();
    $state.go('mainPageState.userProfile');


    $scope.logOut = function () {
        $translate('MAIN_PAGE.LOG_OUT_SURETY').then(function (translation) {
            if (confirm(translation)) {
                localStorage.removeItem(CONSTANTS.LOCAL_STORAGE_KEY);
                $window.location.href = "/";
            }
        });

    }

    $scope.changeLanguage = function (language) { // change language
        $translate.use(language);
    }

    $scope.$on('IdleWarn', function (e, countdown) { // informs that session will be expired soon (countdown - how many seconds)
        $scope.$apply(function () {
            $scope.countdown = countdown;
        });
    });

    $scope.$on('IdleTimeout', function () { // session is expired
        localStorage.removeItem(CONSTANTS.LOCAL_STORAGE_KEY);
        $window.location.href = "/";
    });

    $scope.$on('IdleEnd', function () { // keep alive session 
        $scope.$apply(function () {
            $scope.countdown = 0;
        });
    });

}]);