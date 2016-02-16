(function () {

    'use strict';

    myApp.controller('colorPreferenceController', colorPreferenceController);
    
    colorPreferenceController.$inject = ['$scope'];
    
    function colorPreferenceController($scope) { 
        $scope.colors = ['Красный', 'Оранжевый', 'Бежевый'];
    }

})();