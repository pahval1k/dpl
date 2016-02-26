(function () {

    'use strict';

    myApp.controller('tasteController', tasteController);
    
    tasteController.$inject = ['$scope'];
    
    function tasteController($scope) { 
        $scope.tasteList = ['соленый','острый','сладкий','горький','кислый'];
    }

})();