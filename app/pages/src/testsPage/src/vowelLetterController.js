(function () {

    'use strict';

    myApp.controller('vowelLetterController', vowelLetterController);
    
    vowelLetterController.$inject = ['$scope', '$uibModalInstance'];
    
    function vowelLetterController($scope, $uibModalInstance) {
        $scope.lettersList = ['а', 'о', 'у', 'ы', 'э', 'я', 'ё', 'ю', 'и', 'е'];
        $scope.testName = "vowel_letters";
        $scope.testDescription = "Цель применения теста: выявление индивидуально-типологических различий на основе пред-почтения гласных букв.Инструкция проведения теста.Выделите одну самую привлекательную (+) и наименее привлекательную (-) для Вас буквы из 10 гласных букв (а, о, у, ы, э, я, ё, ю, и, е).Используя градации: ";
        $scope.gradationDescription = [{color: "red",
                                        value: "отталкивающая"
                                        },{
                                        color: "white",
                                        value: "нейтральная"
                                        },{
                                        color: "green",
                                        value: "привлекательная"
                                        }];
        $scope.modalInstance = $uibModalInstance;
    }

})();