(function () {

    'use strict';

    myApp.controller('activitiesLevelsController', activitiesLevelsController);
    
    activitiesLevelsController.$inject = ['$scope'];
    
    function activitiesLevelsController($scope) { 
        $scope.ActivityList = ['Живу',
                               'Общаюсь',
                               'Думаю',
                               'Вступаю в коллективные взаимодействия',
                               'Личностно развиваюсь',
                               'Следую своим ценностным установкам', 
                               'одухотворяюсь (истиной, гармонией, красотой)'];
        
    }

})();