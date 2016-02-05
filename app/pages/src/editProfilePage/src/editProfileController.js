'use strict';

myApp.controller('editProfileController', ['$scope', '$state', 'loadingMaskService', 'CONSTANTS', '$uibModal', '$log', '$rootScope', function ($scope, $state, loadingMaskService, CONSTANTS, $uibModal, $log, $rootScope) {

    var userInfo = JSON.parse(localStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEY));
    $scope.email = userInfo.email;
    $scope.date = userInfo.birthDate;
    $scope.firstName = userInfo.firstName;
    $scope.lastName = userInfo.lastName;
    $scope.relations = userInfo.relations;

    $scope.relationOptions = ['Мама', 'Отец', 'Брат'];
    
    $scope.submit = function () {

        if ($scope.editProfileForm.$valid && $scope.editProfileForm.$dirty) { // if form is valid
            var userInfo = {
                email: $scope.email,
                birthDate: $scope.date,
                firstName: $scope.firstName,
                lastName: $scope.lastName,
                relations: $scope.relations
            };
            localStorage.setItem(CONSTANTS.LOCAL_STORAGE_KEY, JSON.stringify(userInfo));
            loadingMaskService.sendRequest();
            $state.go('mainPageState.userProfile');

        }
    };
    
    $rootScope.$on('relationsUpdated', function(event, relations){
        $scope.relations = relations;
    });
    
    $rootScope.$on('relationRemoved', function(event, relations){
        $scope.relations = relations;
    });
    
    $scope.removeRelation = function(index) {
        var modalInstance = $uibModal.open({
            templateUrl: 'app/pages/src/editProfilePage/src/tpl/removeRelationConfirm.tpl.html',
            controller: 'removeRelationController',
            resolve: {
                index: function () {
                    return index
                }
            }
        });
    }


    $scope.open = function (size) {

        var modalInstance = $uibModal.open({
            templateUrl: 'app/pages/src/editProfilePage/src/tpl/addARelation.tpl.html',
            controller: 'addRelationController'
        });
       
    };


}]);