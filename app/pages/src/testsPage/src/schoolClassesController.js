(function () {

    'use strict';

    myApp.controller('schoolClassesController', schoolClassesController);
    
    schoolClassesController.$inject = ['$scope', '$uibModalInstance'];
    
    function schoolClassesController($scope, $uibModalInstance) { 
        $scope.classesList = ['Труд','Математика','Музыка','ИЗО','Язык','Литература','Иностранный язык','Биология','История','География','Химия','Физика','Информатика','Физкультура','МХК','Обществоведение','Ритмика'];
        $scope.testName = "schoold_classes";
        $scope.testDescription = "Цель применения теста: выявление индивидуально-типологических различий на основе предпо-чтения школьных предметов. Инструкция проведения теста. Для приведенных ниже 17 школьных предметов по 10-бальной шкале (1-10) отметьте, в какой степени Вам нравился школьный предмет и учи-тель (учителя) по этому предмету. Используя градации: ";
        $scope.titleList = [
            'Школьные предметы',
            'Оценка предмета',
            'Оценка учителя'
        ];
        $scope.modalInstance = $uibModalInstance;
    }

})();