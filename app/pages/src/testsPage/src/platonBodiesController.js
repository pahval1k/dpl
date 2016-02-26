(function () {

    'use strict';

    myApp.controller('platonBodiesController', platonBodiesController);
    
    platonBodiesController.$inject = ['$scope'];
    
    function platonBodiesController($scope) { 
        $scope.bodyList = [{
            name: "Икосаэдр",
            imgPath: "app/common/images/ikosaedr.png"
        },{
            name: "Октаэдр",
            imgPath: "app/common/images/oktaedr.png"
        },{
            name: "Гексаедр (куб)",
            imgPath: "app/common/images/geksaedr.png"
        },{
            name: "Тэтраэдр",
            imgPath: "app/common/images/tetraedr.png"
        },{
            name: "Додекаедр",
            imgPath: "app/common/images/dodekaedr.png"
        },{
            name: "Сфера с точкой",
            imgPath: "app/common/images/spherewithpoint.png"
        }];
    }

})();