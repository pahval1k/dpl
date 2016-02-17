(function () {

    'use strict';

    myApp.controller('roleInFilmController', roleInFilmController);
    
    roleInFilmController.$inject = ['$scope'];
    
    function roleInFilmController($scope) { 
        
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
        $scope.init = function() { 
            $(function () {
              //$('[data-toggle="tooltip"]').tooltip()
                console.log(window.jQuery);
            })
        };
        $scope.init();
    }

})();