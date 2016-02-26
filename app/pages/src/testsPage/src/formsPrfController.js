(function () {

    'use strict';

    myApp.controller('formsPrfController', formsPrfController);
    
    formsPrfController.$inject = ['$scope'];
    
    function formsPrfController($scope) { 
        $scope.formImgPathList = ['app/common/images/strangeshape.png', 
                                  'app/common/images/circle.png', 
                                  'app/common/images/rectangle.png', 
                                  'app/common/images/triangle.png', 
                                  'app/common/images/verticalrectangle.png'];
    }

})();