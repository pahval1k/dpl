(function () {

    'use strict';

    myApp.controller('transformationPrfController', transformationPrfController);
    
    transformationPrfController.$inject = ['$scope'];
    
    function transformationPrfController($scope) { 
        $scope.transformationList = ['естественное количественное накопление (или освобождение от лишнего)',
                                     'планомерный рост (или увядание)',
                                     '3качественное развитие (или деградация)',
                                     'рождение (или смерть)',
                                     'появление (или исчезновение)'];
    }

})();