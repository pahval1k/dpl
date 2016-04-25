(function () {

    'use strict';

    myApp.controller('geometricShapesAndBodiesController', geometricShapesAndBodiesController);
    
    geometricShapesAndBodiesController.$inject = ['$scope', '$uibModalInstance', 'CONSTANTS'];
    
    function geometricShapesAndBodiesController($scope, $uibModalInstance, CONSTANTS) {
        $scope.shapesList = [{
            imgPath: "app/common/images/gshape1.png"
        },{
            imgPath: "app/common/images/gshape2.png"
        },{
            imgPath: "app/common/images/gshape3.png"
        },{
            imgPath: "app/common/images/gshape4.png"
        },{
            imgPath: "app/common/images/gshape5.png"
        },{
            imgPath: "app/common/images/gshape6.png"
        },{
            imgPath: "app/common/images/gshape7.png"
        },{
            imgPath: "app/common/images/gshape8.png"
        },{
            imgPath: "app/common/images/gshape9.png"
        },{
            imgPath: "app/common/images/gshape10.png"
        },{
            imgPath: "app/common/images/gshape11.png"
        },{
            imgPath: "app/common/images/gshape12.png"
        }];

        $scope.testName = "geometric_shapes_and_bodies";
        $scope.testDescription = "Цель применения теста: выявление индивидуально-типологических различий восприятия геометрических фигур и тел. Инструкция проведения теста. Выберите из 12 геометрических фигур и тел для Вас самую привлекательную и наименее привлекательную фигуру.  Поставьте около каждой из 12 геометрических фигур и тел свои оценки предпочтений:";
        $scope.gradationDescription = [{color: "red",
            value: "негативное"
        },{
            color: "white",
            value: "нейтрально"
        },{
            color: "green",
            value: "позитивное"
        }];
        $scope.modalInstance = $uibModalInstance;
        $scope.content = CONSTANTS.IMG;
    }

})();