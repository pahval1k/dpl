'use strict';

myApp.controller('editProfileController', ['$scope','$state', 'loadingMaskService', function ($scope, $state, loadingMaskService) {

    var userInfo = JSON.parse(localStorage.getItem("userInfo"));
    $scope.email = userInfo.email;
    $scope.ageNumber = userInfo.age;
    $scope.date = userInfo.birthDate;
    $scope.descriptionField = userInfo.aboutUser;

    $scope.submit = function() { 
        
        if ($scope.editProfileForm.$valid && $scope.editProfileForm.$dirty) { // if form is valid
            var userInfo = {
                email : $scope.email,
                age : $scope.ageNumber,
                birthDate : $scope.date,
                aboutUser : $scope.descriptionField
            };
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
            loadingMaskService.sendRequest();
            $state.go('mainPageState.userProfile');
            
        }
    };
    
    
}]);