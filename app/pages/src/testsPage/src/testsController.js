'use strict';

myApp.controller('testsController',['$scope', '$uibModal', function ($scope, $uibModal) {

    $scope.open = function () {

        var modalInstance = $uibModal.open({
            templateUrl: 'app/pages/src/testsPage/src/tpl/colorPrf.tpl.html',
            controller: 'colorPreferenceController'
        });
       
    };

}]);