'use strict';

myApp.controller('userInfoController', ['$scope', function ($scope) {
    var userInfo = JSON.parse(localStorage.getItem("userInfo"));
    $scope.username = userInfo.email;
    $scope.age = userInfo.age;
    $scope.birthDate = userInfo.birthDate;
    $scope.aboutUser = userInfo.aboutUser;
}]);