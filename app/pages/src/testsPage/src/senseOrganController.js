(function () {

    'use strict';

    myApp.controller('senseOrganController', senseOrganController);
    
    senseOrganController.$inject = ['$scope'];
    
    function senseOrganController($scope) { 
        $scope.senseList = ['слух', 'обоняние', 'осязание', 'вкус', 'зрение'];
    }

})();