(function () {

    'use strict';

    myApp.controller('schoolClassesController', schoolClassesController);
    
    schoolClassesController.$inject = ['$scope','$timeout'];
    
    function schoolClassesController($scope,$timeout) { 
        $scope.classesList = ['Труд','Математика','Музыка','ИЗО','Язык','Литература','Иностранный язык','Биология','История','География','Химия','Физика','Информатика','Физкультура','МХК','Обществоведение','Ритмика'];
        $scope.isValid = true;
        $scope.lessonGrades = [];
        $scope.teacherGrades = [];
        $scope.submitForm = submitForm;
        
        function submitForm() { 
            if (!$scope.gradesForm.$valid) {
                $scope.isValid = false;
                $timeout(function() { 
                    $scope.isValid = true;
                },3000);
            } else {
                console.log("send items");
            }
            
            
        }
    }

})();