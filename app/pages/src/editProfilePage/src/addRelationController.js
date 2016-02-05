'use strict';

myApp.controller('addRelationController',[ '$scope', '$uibModalInstance', 'CONSTANTS', '$rootScope', function ($scope, $uibModalInstance, CONSTANTS, $rootScope) {

    $scope.relationOptions = ['Мама', 'Отец', 'Брат'];
    
    $scope.ok = function () {
        
        if ($scope.addARelationForm.$valid) { // if form is valid
            var userInfo = JSON.parse(localStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEY));
            var relation = {
                relationType: $scope.selectedRelation,
                birthDate: $scope.date,
                firstName: $scope.firstName,
                lastName: $scope.lastName,
            };
            userInfo.relations.push(relation);
            localStorage.setItem(CONSTANTS.LOCAL_STORAGE_KEY, JSON.stringify(userInfo));
            $rootScope.$emit('relationsUpdated', userInfo.relations);
            $uibModalInstance.close();
        }
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    

}]);