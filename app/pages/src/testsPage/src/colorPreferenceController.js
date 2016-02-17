(function () {

    'use strict';

    myApp.controller('colorPreferenceController', colorPreferenceController);
    
    colorPreferenceController.$inject = ['$scope'];
    
    function colorPreferenceController($scope) { 
        $scope.colorsListOne = ['Красный', 'Оранжевый', 'Желтый','Зеленый', 'Голубой', 'Синий', 'Фиолетовый'];
        $scope.colorsListTwo = ['Черный','Белый','Коричневый','Розовый','Серебристо-серый'];
    }

})();