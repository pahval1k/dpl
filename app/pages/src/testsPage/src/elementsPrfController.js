(function () {

    'use strict';

    myApp.controller('elementsPrfController', elementsPrfController);
    
    elementsPrfController.$inject = ['$scope'];
    
    function elementsPrfController($scope) { 
        $scope.elementsList = ['Вода','Металл(воздух)','Земля','Огонь','Дерево(Эфир)'];
    }

})();