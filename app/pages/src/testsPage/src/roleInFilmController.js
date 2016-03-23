(function () {

    'use strict';

    myApp.controller('roleInFilmController', roleInFilmController);
    
    roleInFilmController.$inject = ['$scope', 'preferencesService'];
    
    function roleInFilmController($scope, preferencesService) { 
        
        $scope.roleList = [
            {
                title: 'Режиссер-массовок',
                description: ''
            }, {
                title: 'Реквезитор, Режиссер монтажа',
                description: 'с лат. необходимое, отве-чает за хранение, получение на складе, ремонт и транспортировку реквизита'
            }, {
                title: 'Костюмер, гример',
                description: ''
            }, {
                title: 'Директор картины',
                description: 'Отвечает за бухгалтерию'
            }, {
                title: 'Режиссер по работе с актерами',
                description: ''
            }, {
                title: 'режиссер-постановщик трю-ков',
                description: ''
            }, {
                title: 'Продюссер',
                description: 'художе-ственный и финансовый руководитель: выбирает сценарий и режиссера, осу-ществляет производство и контроль'
            }, {
                title: 'Кинодистрибьютер',
                description: 'Отвечает за прокат фильма'
            }, {
                title: 'Киномаркетолог',
                description: ''
            }, {
                title: 'Актер',
                description: ''
            }, {
                title: 'Монтажер',
                description: ''
            }, {
                title: 'Звукооператор, кинооператор, оператор, каскадер, участник массовок',
                description: ''
            }, {
                title: 'Постановщик, сценарист, хореограф, кинокомпозитор',
                description: ''
            }, {
                title: 'Оператор-постановщик',
                description: 'главный оператор'
            }, {
                title: 'Звукорежиссер, звукоинжинер',
                description: ''
            }, {
                title: 'Кинокритик',
                description: ''
            }, {
                title: 'Организатор показа через сайн или кинотеатр',
                description: ''
            }, {
                title: 'зритель',
                description: ''
            }

        ];
        
        $scope.gradations = preferencesService.gradations;
        $scope.selectedColors = preferencesService.selectedColors;
        $scope.selectPositiveLetter = preferencesService.selectPositiveLetter;
        $scope.selectNegativeLetter = preferencesService.selectNegativeLetter;
        $scope.selectedPosButton = preferencesService.selectedPosButton;
        $scope.selectedNegButton = preferencesService.selectedNegButton;
        $scope.selectColor = preferencesService.selectColor;
        //$scope.submitForm = submitForm;
        $scope.isValid = true;
        
        
    }

})();