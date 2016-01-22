'use strict';

myApp.controller('mainPageController', ['$scope', '$state', 'loadingMaskService', '$window', '$translate', 'CONSTANTS', function ($scope, $state, loadingMaskService, $window, $translate, CONSTANTS) {


    var updateHasPendingRequestStatus = function () {
        $scope.hasPendingRequests = loadingMaskService.hasPendingRequests;
    }
    loadingMaskService.registerObserver(updateHasPendingRequestStatus);

    $scope.countdown = 0;

    $scope.sendRequest = loadingMaskService.sendRequest;
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

    $scope.changeLanguage = function (language) {
        $translate.use(language);
    }

    $scope.$on('IdleStart', function () {
        $scope.ifSessionExpiring = true;
    });

    $scope.$on('IdleWarn', function (e, countdown) {
        $scope.$apply(function () {
            $scope.countdown = countdown;
        });
    });

    $scope.$on('IdleTimeout', function () {
        localStorage.removeItem(CONSTANTS.LOCAL_STORAGE_KEY);
        $window.location.href = "/";
    });

    $scope.$on('IdleEnd', function () {
        $scope.$apply(function () {
            $scope.countdown = 0;
        });
    });

}]);