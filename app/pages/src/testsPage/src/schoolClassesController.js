(function () {

    'use strict';

    myApp.controller('schoolClassesController', schoolClassesController);
    
    schoolClassesController.$inject = ['$scope'];
    
    function schoolClassesController($scope) { 
        $scope.classesList = ['Труд','Математика','Музыка','ИЗО','Язык','Литература','Иностранный язык','Биология','История','География','Химия','Физика','Информатика','Физкультура','МХК','Обществоведение','Ритмика'];
    }

})();