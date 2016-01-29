'use strict';

myApp.controller('userInfoController', ['$scope', 'CONSTANTS', function ($scope, CONSTANTS) {
    var userInfo = JSON.parse(localStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEY));
    $scope.username = userInfo.email;
    $scope.age = userInfo.age;
    $scope.birthDate = userInfo.birthDate;
    $scope.aboutUser = userInfo.aboutUser;
}]);