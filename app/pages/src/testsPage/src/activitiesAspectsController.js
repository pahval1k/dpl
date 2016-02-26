(function () {

    'use strict';

    myApp.controller('activitiesAspectsController', activitiesAspectsController);
    
    activitiesAspectsController.$inject = ['$scope'];
    
    function activitiesAspectsController($scope) { 
        $scope.ActivityList = ['ориентируюсь (принимаю решение)',
                               'верю в дело',
                               'желаю и переживаю эмоции',
                               'люблю и выстраиваю взаимоотношения',
                               'воспринимаю и действую'];
    }

})();