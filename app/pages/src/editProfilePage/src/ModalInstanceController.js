'use strict';

myApp.controller('ModalInstanceController',[ '$scope', '$uibModalInstance', 'CONSTANTS', '$rootScope', function ($scope, $uibModalInstance, CONSTANTS, $rootScope) {

    $scope.relationOptions = ['Мама', 'Отец', 'Брат'];
    
    $scope.ok = function () {
        var userInfo = JSON.parse(localStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEY));
        var relation = {
            relationType: $scope.selectedRelation,
            birthDate: $scope.date,
            firstName: $scope.firstName,
            lastName: $scope.lastName,
        };
        userInfo.relations.push(relation);
        localStorage.setItem(CONSTANTS.LOCAL_STORAGE_KEY, JSON.stringify(userInfo));
        $rootScope.$emit('relationsUpdated', "a");
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

    

}]);