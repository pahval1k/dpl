(function () {

    'use strict';

    myApp.controller('tvshowsPreferencesController', tvshowsPreferencesController);

    tvshowsPreferencesController.$inject = ['$scope', '$timeout', 'testDataService', 'CONSTANTS', '$uibModalInstance', 'preferencesService'];

    function tvshowsPreferencesController($scope, $timeout, testDataService, CONSTANTS, $uibModalInstance, preferencesService) {
        $scope.lettersList = ['политика','экономика и бизнес', 'финансы ','события в своей стране', 'события в мире', 'спорт', 'красота и, стиль, мода', 'мир науки и техники', 'автомир', 'происшествия', 'отношения и психология', 'еда', 'карьера', 'жизнь звезд', 'тесты, гороскопы, гадания', 'животный мир', 'Эзотерика и экстросенсорика', 'Игры интеллектуальные', 'Игры компьютерные', 'История','эротика', 'поэзия и литература', 'религиозная тематика', 'старославянская тематика', 'йога', 'танцы', 'музыка', 'отдых и туризм, путешествия', 'реалити шоу', 'камеди-клаб', 'сериалы', 'фильмы', 'дети', 'художественное творчество и рукоделие', 'дача, приусадебное хозяйство', 'дом, квартира (уход, благоустройство и ремонт)', 'азартные игры по интернету', 'интернет-шопинг', 'учеба и самообразование', 'новое в медицине', 'новое в образовании', 'новое в законодательстве','общение с друзьями в соцсети'];
        $scope.testName = "tv_shows_preferences";
        $scope.testDescription = "Цель применения теста: выявление индивидуально-типологических различий предпочтения рубрик передач. Инструкция проведения теста. Просмотрите сначала весь список рубрик. Выберите по пять наиболее (+) и наименее (–) интересных рубрик новостей, информации и передач в интернете или на телевиденье и отметьте напротив каждой (из 43) уровень Вашего интереса к ней.";
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
        $scope.content = CONSTANTS.STRING;

        $scope.outputData = outputData;

        function outputData(selectedColors, selectedPosButton, selectedNegButton) {
            var T20 = preferencesService.outputDataFormat(selectedColors, selectedPosButton, selectedNegButton);
            var TT20 = [];
            for (var j = 44; j<48; j++) {
                if (T20[j] === 1 && T20[1]>0) {
                    TT20[15] = TT20[15] + T20[1] + 1;
                    TT20[17] = TT20[17] + T20[1] + 2;
                } else if (T20[j] == 2 && T20[2] > 0) {
                    TT20[14] = TT20[14] + T20[2] + 2;
                    TT20[15] = TT20[15] + T20[2] + 1;
                    TT20[16] = TT20[16] + T20[2] + 1;
                } else if (T20[j] == 3 && T20[3] > 0) {
                    TT20[14] = TT20[14] + T20[3] + 2;
                    TT20[15] = TT20[15] + T20[3] + 1;
                    TT20[12] = TT20[12] + T20[3] + 1;
                } else if (T20[j] == 4 && T20[4] > 0) {
                    TT20[17] = TT20[17] + T20[4] + 1;
                    TT20[5] = TT20[5] + T20[4] + 1;
                    TT20[15] = TT20[15] + T20[4] + 1;
                    TT20[9] = TT20[9] + T20[4] + 2;
                    TT20[7] = TT20[7] + T20[4] + 1;
                    TT20[3] = TT20[3] + T20[4] + 1;
                    TT20[18] = TT20[18] + T20[4] + 1;
                } else if (T20[j] == 5 && T20[5] > 0) {
                    TT20[17] = TT20[17] + T20[5] + 1;
                    TT20[18] = TT20[18] + T20[5] + 1;
                    TT20[14] = TT20[14] + T20[5] + 1;
                    TT20[11] = TT20[11] + T20[5] + 1;
                    TT20[9] = TT20[9] + T20[5] + 2;
                    TT20[7] = TT20[7] + T20[5] + 1;
                    TT20[5] = TT20[5] + T20[5] + 1;
                    TT20[4] = TT20[4] + T20[5] + 1;
                } else if (T20[j] == 6 && T20[6] > 0) {
                    TT20[11] = TT20[11] + T20[6] + 2;
                    TT20[5] = TT20[5] + T20[6] + 1;
                    TT20[3] = TT20[3] + T20[6] + 1;
                } else if (T20[j] == 7 && T20[7] > 0) {
                    TT20[7] = TT20[7] + T20[7] + 2;
                    TT20[5] = TT20[5] + T20[7] + 1;
                    TT20[3] = TT20[3] + T20[7] + 1;
                } else if (T20[j] == 8 && T20[8] > 0) {
                    TT20[9] = TT20[9] + T20[8] + 1;
                    TT20[6] = TT20[6] + T20[8] + 2;
                    TT20[10] = TT20[10] + T20[8] + 1;
                    TT20[13] = TT20[13] + T20[8] + 2;
                } else if (T20[j] == 9 && T20[9] > 0) {
                    TT20[12] = TT20[12] + T20[9] + 1;
                    TT20[13] = TT20[13] + T20[9] + 2;
                } else if (T20[j] == 10 && T20[10] > 0) {
                    TT20[3] = TT20[3] + T20[10] + 2;
                    TT20[5] = TT20[5] + T20[10] + 1;
                    TT20[1] = TT20[11] + T20[10] + 1;
                    TT20[12] = TT20[12] + T20[10] + 1;
                } else if (T20[j] == 11 && T20[11] > 0) {
                    TT20[10] = TT20[10] + T20[11] + 1;
                    TT20[18] = TT20[18] + T20[11] + 2;
                    TT20[11] = TT20[11] + T20[11] + 2;
                    TT20[3] = TT20[3] + T20[11] + 2;
                    TT20[4] = TT20[4] + T20[11] + 1;
                    TT20[5] = TT20[5] + T20[11] + 1;
                    TT20[7] = TT20[7] + T20[11] + 2;
                    TT20[8] = TT20[8] + T20[11] + 1;
                } else if (T20[j] == 12 && T20[12] > 0) {
                    TT20[12] = TT20[12] + T20[12] + 2;
                    TT20[16] = TT20[16] + T20[12] + 1;
                    TT20[1] = TT20[1] + T20[12] + 1;
                    TT20[8] = TT20[8] + T20[12] + 2;
                } else if (T20[j] == 13 && T20[13] > 0) {
                    TT20[15] = TT20[15] + T20[13] + 1;
                    TT20[14] = TT20[14] + T20[13] + 1;
                    TT20[3] = TT20[3] + T20[13] + 2;
                } else if (T20[j] == 14 && T20[14] > 0) {
                    TT20[11] = TT20[11] + T20[14] + 2;
                    TT20[7] = TT20[7] + T20[14] + 2;
                    TT20[5] = TT20[5] + T20[14] + 2;
                } else if (T20[j] == 15 && T20[15] > 0) {
                    TT20[18] = TT20[18] + T20[15] + 1;
                    TT20[11] = TT20[11] + T20[15] + 1;
                    TT20[8] = TT20[8] + T20[15] + 1;
                    TT20[3] = TT20[3] + T20[15] + 2;
                    TT20[4] = TT20[4] + T20[15] + 2;
                    TT20[5] = TT20[5] + T20[15] + 1;
                } else if (T20[j] == 16 && T20[16] > 0) {
                    TT20[12] = TT20[12] + T20[16] + 1;
                    TT20[11] = TT20[11] + T20[16] + 2;
                    TT20[8] = TT20[8] + T20[16] + 1;
                    TT20[3] = TT20[3] + T20[16] + 1;
                    TT20[1] = TT20[4] + T20[16] + 2;
                } else if (T20[j] == 17 && T20[17] > 0) {
                    TT20[18] = TT20[18] + T20[17] + 1;
                    TT20[11] = TT20[11] + T20[17] + 1;
                    TT20[8] = TT20[8] + T20[17] + 2;
                    TT20[3] = TT20[3] + T20[17] + 2;
                    TT20[1] = TT20[1] + T20[17] + 1;
                    TT20[4] = TT20[4] + T20[17] + 2;
                } else if (T20[j] == 18 && T20[18] > 0) {
                    TT20[10] = TT20[10] + T20[18] + 1;
                    TT20[18] = TT20[18] + T20[18] + 1;
                    TT20[11] = TT20[11] + T20[18] + 2;
                    TT20[3] = TT20[3] + T20[18] + 2;
                    TT20[2] = TT20[2] + T20[18] + 2;
                    TT20[9] = TT20[9] + T20[18] + 2;
                    TT20[7] = TT20[7] + T20[18] + 1;
                } else if (T20[j] == 19 && T20[19] > 0) {
                    TT20[10] = TT20[10] + T20[19] + 1;
                    TT20[11] = TT20[11] + T20[19] + 2;
                    TT20[2] = TT20[2] + T20[19] + 1;
                    TT20[8] = TT20[8] + T20[19] + 1;
                    TT20[7] = TT20[7] + T20[19] + 1;
                } else if (T20[j] == 20 && T20[20] > 0) {
                    TT20[10] = TT20[10] + T20[20] + 1;
                    TT20[11] = TT20[11] + T20[20] + 1;
                    TT20[15] = TT20[15] + T20[20] + 1;
                    TT20[17] = TT20[17] + T20[20] + 2;
                    TT20[18] = TT20[18] + T20[20] + 1;
                    TT20[3] = TT20[3] + T20[20] + 1;
                    TT20[4] = TT20[4] + T20[20] + 1;
                    TT20[5] = TT20[5] + T20[20] + 1;
                    TT20[7] = TT20[7] + T20[20] + 1;
                    TT20[9] = TT20[9] + T20[20] + 2;
                } else if (T20[j] == 21 && T20[21] > 0) {
                    TT20[11] = TT20[11] + T20[21] + 1;
                    TT20[3] = TT20[3] + T20[21] + 2;
                    TT20[5] = TT20[5] + T20[21] + 1;
                    TT20[7] = TT20[7] + T20[21] + 2;
                    TT20[8] = TT20[8] + T20[21] + 1;
                } else if (T20[j] == 22 && T20[22] > 0) {
                    TT20[10] = TT20[10] + T20[22] + 1;
                    TT20[11] = TT20[11] + T20[22] + 2;
                    TT20[17] = TT20[17] + T20[22] + 1;
                    TT20[18] = TT20[18] + T20[22] + 2;
                    TT20[2] = TT20[2] + T20[22] + 2;
                    TT20[3] = TT20[3] + T20[22] + 2;
                    TT20[5] = TT20[5] + T20[22] + 1;
                    TT20[7] = TT20[7] + T20[22] + 2;
                    TT20[8] = TT20[8] + T20[22] + 1;
                    TT20[9] = TT20[9] + T20[22] + 1;
                } else if (T20[j] == 23 && T20[23] > 0) {
                    TT20[11] = TT20[11] + T20[23] + 2;
                    TT20[18] = TT20[18] + T20[23] + 2;
                    TT20[3] = TT20[3] + T20[23] + 1;
                    TT20[4] = TT20[4] + T20[23] + 2;
                    TT20[7] = TT20[7] + T20[23] + 1;
                } else if (T20[j] == 24 && T20[24] > 0) {
                    TT20[10] = TT20[10] + T20[24] + 1;
                    TT20[11] = TT20[11] + T20[24] + 2;
                    TT20[12] = TT20[12] + T20[24] + 2;
                    TT20[16] = TT20[16] + T20[24] + 1;
                    TT20[17] = TT20[17] + T20[24] + 2;
                    TT20[18] = TT20[18] + T20[24] + 2;
                    TT20[1] = TT20[1] + T20[24] + 1;
                    TT20[3] = TT20[3] + T20[24] + 2;
                    TT20[4] = TT20[4] + T20[24] + 2;
                    TT20[7] = TT20[7] + T20[24] + 2;
                    TT20[8] = TT20[8] + T20[24] + 2;
                } else if (T20[j] == 25 && T20[25] > 0) {
                    TT20[11] = TT20[11] + T20[25] + 1;
                    TT20[18] = TT20[18] + T20[25] + 1;
                    TT20[1] = TT20[1] + T20[25] + 1;
                    TT20[3] = TT20[3] + T20[25] + 2;
                    TT20[2] = TT20[2] + T20[25] + 2;
                    TT20[7] = TT20[7] + T20[25] + 1;
                    TT20[8] = TT20[8] + T20[25] + 2;
                } else if (T20[j] == 26 && T20[26] > 0) {
                    TT20[11] = TT20[11] + T20[26] + 1;
                    TT20[3] = TT20[3] + T20[26] + 1;
                    TT20[2] = TT20[2] + T20[26] + 1;
                    TT20[7] = TT20[7] + T20[26] + 2;
                    TT20[8] = TT20[8] + T20[26] + 2;
                } else if (T20[j] == 27 && T20[27] > 0) {
                    TT20[11] = TT20[11] + T20[27] + 1;
                    TT20[3] = TT20[3] + T20[27] + 2;
                    TT20[5] = TT20[5] + T20[27] + 1;
                    TT20[7] = TT20[7] + T20[27] + 2;
                    TT20[8] = TT20[8] + T20[27] + 1;
                } else if (T20[j] == 28 && T20[28] > 0) {
                    TT20[11] = TT20[11] + T20[28] + 1;
                    TT20[12] = TT20[12] + T20[28] + 2;
                    TT20[1] = TT20[1] + T20[28] + 1;
                    TT20[3] = TT20[3] + T20[28] + 2;
                    TT20[7] = TT20[7] + T20[28] + 1;
                    TT20[8] = TT20[8] + T20[28] + 1;
                } else if (T20[j] == 29 && T20[29] > 0) {
                    TT20[11] = TT20[11] + T20[29] + 2;
                    TT20[3] = TT20[3] + T20[29] + 1;
                    TT20[5] = TT20[5] + T20[29] + 2;
                } else if (T20[j] == 30 && T20[30] > 0) {
                    TT20[11] = TT20[11] + T20[30] + 2;
                    TT20[10] = TT20[10] + T20[30] + 1;
                    TT20[3] = TT20[3] + T20[30] + 1;
                    TT20[7] = TT20[7] + T20[30] + 1;
                    TT20[5] = TT20[5] + T20[30] + 2;
                } else if (T20[j] == 31 && T20[31] > 0) {
                    TT20[11] = TT20[11] + T20[31] + 2;
                    TT20[3] = TT20[3] + T20[31] + 2;
                    TT20[5] = TT20[5] + T20[31] + 2;
                } else if (T20[j] == 32 && T20[32] > 0) {
                    TT20[11] = TT20[11] + T20[32] + 1;
                    TT20[5] = TT20[5] + T20[32] + 1;
                    TT20[3] = TT20[3] + T20[32] + 2;
                    TT20[7] = TT20[7] + T20[32] + 1;
                } else if (T20[j] == 33 && T20[33] > 0) {
                    TT20[10] = TT20[10] + T20[33] + 2;
                    TT20[11] = TT20[11] + T20[33] + 2;
                    TT20[12] = TT20[12] + T20[33] + 1;
                    TT20[1] = TT20[1] + T20[33] + 1;
                    TT20[3] = TT20[3] + T20[33] + 2;
                    TT20[8] = TT20[8] + T20[33] + 2;
                } else if (T20[j] == 34 && T20[34] > 0) {
                    TT20[12] = TT20[12] + T20[34] + 1;
                    TT20[16] = TT20[16] + T20[34] + 1;
                    TT20[13] = TT20[13] + T20[34] + 2;
                    TT20[2] = TT20[2] + T20[34] + 2;
                    TT20[3] = TT20[3] + T20[34] + 1;
                    TT20[7] = TT20[7] + T20[34] + 2;
                    TT20[8] = TT20[8] + T20[34] + 1;
                } else if (T20[j] == 35 && T20[35] > 0) {
                    TT20[12] = TT20[12] + T20[35] + 2;
                    TT20[13] = TT20[13] + T20[35] + 1;
                    TT20[14] = TT20[14] + T20[35] + 2;
                    TT20[16] = TT20[16] + T20[35] + 2;
                    TT20[1] = TT20[1] + T20[35] + 2;
                    TT20[3] = TT20[3] + T20[35] + 1;
                    TT20[2] = TT20[2] + T20[35] + 1;
                } else if (T20[j] == 36 && T20[36] > 0) {
                    TT20[12] = TT20[12] + T20[36] + 2;
                    TT20[13] = TT20[13] + T20[36] + 1;
                    TT20[16] = TT20[16] + T20[36] + 1;
                    TT20[2] = TT20[2] + T20[36] + 1;
                } else if (T20[j] == 37 && T20[37] > 0) {
                    TT20[11] = TT20[11] + T20[37] + 2;
                } else if (T20[j] == 38 && T20[38] > 0) {
                    TT20[12] = TT20[12] + T20[38] + 2;
                    TT20[3] = TT20[3] + T20[38] + 1;
                    TT20[5] = TT20[5] + T20[38] + 1;
                } else if (T20[j] == 39 && T20[39] > 0) {
                    TT20[10] = TT20[10] + T20[39] + 2;
                    TT20[11] = TT20[11] + T20[39] + 1;
                    TT20[2] = TT20[2] + T20[39] + 1;
                    TT20[3] = TT20[3] + T20[39] + 1;
                } else if (T20[j] == 40 && T20[40] > 0) {
                    TT20[8] = TT20[8] + T20[40] + 2;
                    TT20[6] = TT20[6] + T20[40] + 2;
                } else if (T20[j] == 41 && T20[41] > 0) {
                    TT20[10] = TT20[10] + T20[41] + 2;
                    TT20[2] = TT20[2] + T20[41] + 2;
                } else if (T20[j] == 42 && T20[42] > 0) {
                    TT20[12] = TT20[12] + T20[42] + 1;
                    TT20[15] = TT20[15] + T20[42] + 2;
                    TT20[14] = TT20[14] + T20[42] + 1;
                    TT20[5] = TT20[5] + T20[42] + 2;
                } else if (T20[j] == 43 && T20[43] > 0) {
                    TT20[11] = TT20[11] + T20[43] + 1;
                    TT20[12] = TT20[12] + T20[43] + 1;
                    TT20[15] = TT20[15] + T20[43] + 1;
                    TT20[18] = TT20[18] + T20[43] + 2;
                    TT20[3] = TT20[3] + T20[43] + 2;
                    TT20[5] = TT20[5] + T20[43] + 2;
                    TT20[7] = TT20[7] + T20[43] + 1;
                }
            }
            for (var j = 49; j<53; j++) {
                if (T20[j] === 1 && T20[1]<0) {
                    TT20[15] = TT20[15] + T20[1] - 1;
                    TT20[17] = TT20[17] + T20[1] - 2;
                } else if (T20[j] == 2 && T20[2] < 0) {
                    TT20[14] = TT20[14] + T20[2] - 2;
                    TT20[15] = TT20[15] + T20[2] - 1;
                    TT20[16] = TT20[16] + T20[2] - 1;
                } else if (T20[j] == 3 && T20[3] < 0) {
                    TT20[14] = TT20[14] + T20[3] - 2;
                    TT20[15] = TT20[15] + T20[3] - 1;
                    TT20[12] = TT20[12] + T20[3] - 1;
                } else if (T20[j] == 4 && T20[4] < 0) {
                    TT20[17] = TT20[17] + T20[4] - 1;
                    TT20[5] = TT20[5] + T20[4] - 1;
                    TT20[15] = TT20[15] + T20[4] - 1;
                    TT20[9] = TT20[9] + T20[4] - 2;
                    TT20[7] = TT20[7] + T20[4] - 1;
                    TT20[3] = TT20[3] + T20[4] - 1;
                    TT20[18] = TT20[18] + T20[4] - 1;
                } else if (T20[j] == 5 && T20[5] < 0) {
                    TT20[17] = TT20[17] + T20[5] - 1;
                    TT20[18] = TT20[18] + T20[5] - 1;
                    TT20[14] = TT20[14] + T20[5] - 1;
                    TT20[11] = TT20[11] + T20[5] - 1;
                    TT20[9] = TT20[9] + T20[5] - 2;
                    TT20[7] = TT20[7] + T20[5] - 1;
                    TT20[5] = TT20[5] + T20[5] - 1;
                    TT20[4] = TT20[4] + T20[5] - 1;
                } else if (T20[j] == 6 && T20[6] < 0) {
                    TT20[11] = TT20[11] + T20[6] - 2;
                    TT20[5] = TT20[5] + T20[6] - 1;
                    TT20[3] = TT20[3] + T20[6] - 1;
                } else if (T20[j] == 7 && T20[7] < 0) {
                    TT20[7] = TT20[7] + T20[7] - 2;
                    TT20[5] = TT20[5] + T20[7] - 1;
                    TT20[3] = TT20[3] + T20[7] - 1;
                } else if (T20[j] == 8 && T20[8] < 0) {
                    TT20[9] = TT20[9] + T20[8] - 1;
                    TT20[6] = TT20[6] + T20[8] - 2;
                    TT20[10] = TT20[10] + T20[8] - 1;
                    TT20[13] = TT20[13] + T20[8] - 2;
                } else if (T20[j] == 9 && T20[9] < 0) {
                    TT20[12] = TT20[12] + T20[9] - 1;
                    TT20[13] = TT20[13] + T20[9] - 2;
                } else if (T20[j] == 10 && T20[10] < 0) {
                    TT20[3] = TT20[3] + T20[10] - 2;
                    TT20[5] = TT20[5] + T20[10] - 1;
                    TT20[1] = TT20[11] + T20[10] - 1;
                    TT20[12] = TT20[12] + T20[10] - 1;
                } else if (T20[j] == 11 && T20[11] < 0) {
                    TT20[10] = TT20[10] + T20[11] - 1;
                    TT20[18] = TT20[18] + T20[11] - 2;
                    TT20[11] = TT20[11] + T20[11] - 2;
                    TT20[3] = TT20[3] + T20[11] - 2;
                    TT20[4] = TT20[4] + T20[11] - 1;
                    TT20[5] = TT20[5] + T20[11] - 1;
                    TT20[7] = TT20[7] + T20[11] - 2;
                    TT20[8] = TT20[8] + T20[11] - 1;
                } else if (T20[j] == 12 && T20[12] < 0) {
                    TT20[12] = TT20[12] + T20[12] - 2;
                    TT20[16] = TT20[16] + T20[12] - 1;
                    TT20[1] = TT20[1] + T20[12] - 1;
                    TT20[8] = TT20[8] + T20[12] - 2;
                } else if (T20[j] == 13 && T20[13] < 0) {
                    TT20[15] = TT20[15] + T20[13] - 1;
                    TT20[14] = TT20[14] + T20[13] - 1;
                    TT20[3] = TT20[3] + T20[13] - 2;
                } else if (T20[j] == 14 && T20[14] < 0) {
                    TT20[11] = TT20[11] + T20[14] - 2;
                    TT20[7] = TT20[7] + T20[14] - 2;
                    TT20[5] = TT20[5] + T20[14] - 2;
                } else if (T20[j] == 15 && T20[15] < 0) {
                    TT20[18] = TT20[18] + T20[15] - 1;
                    TT20[11] = TT20[11] + T20[15] - 1;
                    TT20[8] = TT20[8] + T20[15] - 1;
                    TT20[3] = TT20[3] + T20[15] - 2;
                    TT20[4] = TT20[4] + T20[15] - 2;
                    TT20[5] = TT20[5] + T20[15] - 1;
                } else if (T20[j] == 16 && T20[16] < 0) {
                    TT20[12] = TT20[12] + T20[16] - 1;
                    TT20[11] = TT20[11] + T20[16] - 2;
                    TT20[8] = TT20[8] + T20[16] - 1;
                    TT20[3] = TT20[3] + T20[16] - 1;
                    TT20[1] = TT20[4] + T20[16] - 2;
                } else if (T20[j] == 17 && T20[17] < 0) {
                    TT20[18] = TT20[18] + T20[17] - 1;
                    TT20[11] = TT20[11] + T20[17] - 1;
                    TT20[8] = TT20[8] + T20[17] - 2;
                    TT20[3] = TT20[3] + T20[17] - 2;
                    TT20[1] = TT20[1] + T20[17] - 1;
                    TT20[4] = TT20[4] + T20[17] - 2;
                } else if (T20[j] == 18 && T20[18] < 0) {
                    TT20[10] = TT20[10] + T20[18] - 1;
                    TT20[18] = TT20[18] + T20[18] - 1;
                    TT20[11] = TT20[11] + T20[18] - 2;
                    TT20[3] = TT20[3] + T20[18] - 2;
                    TT20[2] = TT20[2] + T20[18] - 2;
                    TT20[9] = TT20[9] + T20[18] - 2;
                    TT20[7] = TT20[7] + T20[18] - 1;
                } else if (T20[j] == 19 && T20[19] < 0) {
                    TT20[10] = TT20[10] + T20[19] - 1;
                    TT20[11] = TT20[11] + T20[19] - 2;
                    TT20[2] = TT20[2] + T20[19] - 1;
                    TT20[8] = TT20[8] + T20[19] - 1;
                    TT20[7] = TT20[7] + T20[19] - 1;
                } else if (T20[j] == 20 && T20[20] < 0) {
                    TT20[10] = TT20[10] + T20[20] - 1;
                    TT20[11] = TT20[11] + T20[20] - 1;
                    TT20[15] = TT20[15] + T20[20] - 1;
                    TT20[17] = TT20[17] + T20[20] - 2;
                    TT20[18] = TT20[18] + T20[20] - 1;
                    TT20[3] = TT20[3] + T20[20] - 1;
                    TT20[4] = TT20[4] + T20[20] - 1;
                    TT20[5] = TT20[5] + T20[20] - 1;
                    TT20[7] = TT20[7] + T20[20] - 1;
                    TT20[9] = TT20[9] + T20[20] - 2;
                } else if (T20[j] == 21 && T20[21] < 0) {
                    TT20[11] = TT20[11] + T20[21] - 1;
                    TT20[3] = TT20[3] + T20[21] - 2;
                    TT20[5] = TT20[5] + T20[21] - 1;
                    TT20[7] = TT20[7] + T20[21] - 2;
                    TT20[8] = TT20[8] + T20[21] - 1;
                } else if (T20[j] == 22 && T20[22] < 0) {
                    TT20[10] = TT20[10] + T20[22] - 1;
                    TT20[11] = TT20[11] + T20[22] - 2;
                    TT20[17] = TT20[17] + T20[22] - 1;
                    TT20[18] = TT20[18] + T20[22] - 2;
                    TT20[2] = TT20[2] + T20[22] - 2;
                    TT20[3] = TT20[3] + T20[22] - 2;
                    TT20[5] = TT20[5] + T20[22] - 1;
                    TT20[7] = TT20[7] + T20[22] - 2;
                    TT20[8] = TT20[8] + T20[22] - 1;
                    TT20[9] = TT20[9] + T20[22] - 1;
                } else if (T20[j] == 23 && T20[23] < 0) {
                    TT20[11] = TT20[11] + T20[23] - 2;
                    TT20[18] = TT20[18] + T20[23] - 2;
                    TT20[3] = TT20[3] + T20[23] - 1;
                    TT20[4] = TT20[4] + T20[23] - 2;
                    TT20[7] = TT20[7] + T20[23] - 1;
                } else if (T20[j] == 24 && T20[24] < 0) {
                    TT20[10] = TT20[10] + T20[24] - 1;
                    TT20[11] = TT20[11] + T20[24] - 2;
                    TT20[12] = TT20[12] + T20[24] - 2;
                    TT20[16] = TT20[16] + T20[24] - 1;
                    TT20[17] = TT20[17] + T20[24] - 2;
                    TT20[18] = TT20[18] + T20[24] - 2;
                    TT20[1] = TT20[1] + T20[24] - 1;
                    TT20[3] = TT20[3] + T20[24] - 2;
                    TT20[4] = TT20[4] + T20[24] - 2;
                    TT20[7] = TT20[7] + T20[24] - 2;
                    TT20[8] = TT20[8] + T20[24] - 2;
                } else if (T20[j] == 25 && T20[25] < 0) {
                    TT20[11] = TT20[11] + T20[25] - 1;
                    TT20[18] = TT20[18] + T20[25] - 1;
                    TT20[1] = TT20[1] + T20[25] - 1;
                    TT20[3] = TT20[3] + T20[25] - 2;
                    TT20[2] = TT20[2] + T20[25] - 2;
                    TT20[7] = TT20[7] + T20[25] - 1;
                    TT20[8] = TT20[8] + T20[25] - 2;
                } else if (T20[j] == 26 && T20[26] < 0) {
                    TT20[11] = TT20[11] + T20[26] - 1;
                    TT20[3] = TT20[3] + T20[26] - 1;
                    TT20[2] = TT20[2] + T20[26] - 1;
                    TT20[7] = TT20[7] + T20[26] - 2;
                    TT20[8] = TT20[8] + T20[26] - 2;
                } else if (T20[j] == 27 && T20[27] < 0) {
                    TT20[11] = TT20[11] + T20[27] - 1;
                    TT20[3] = TT20[3] + T20[27] - 2;
                    TT20[5] = TT20[5] + T20[27] - 1;
                    TT20[7] = TT20[7] + T20[27] - 2;
                    TT20[8] = TT20[8] + T20[27] - 1;
                } else if (T20[j] == 28 && T20[28] < 0) {
                    TT20[11] = TT20[11] + T20[28] - 1;
                    TT20[12] = TT20[12] + T20[28] - 2;
                    TT20[1] = TT20[1] + T20[28] - 1;
                    TT20[3] = TT20[3] + T20[28] - 2;
                    TT20[7] = TT20[7] + T20[28] - 1;
                    TT20[8] = TT20[8] + T20[28] - 1;
                } else if (T20[j] == 29 && T20[29] < 0) {
                    TT20[11] = TT20[11] + T20[29] - 2;
                    TT20[3] = TT20[3] + T20[29] - 1;
                    TT20[5] = TT20[5] + T20[29] - 2;
                } else if (T20[j] == 30 && T20[30] < 0) {
                    TT20[11] = TT20[11] + T20[30] - 2;
                    TT20[10] = TT20[10] + T20[30] - 1;
                    TT20[3] = TT20[3] + T20[30] - 1;
                    TT20[7] = TT20[7] + T20[30] - 1;
                    TT20[5] = TT20[5] + T20[30] - 2;
                } else if (T20[j] == 31 && T20[31] < 0) {
                    TT20[11] = TT20[11] + T20[31] - 2;
                    TT20[3] = TT20[3] + T20[31] - 2;
                    TT20[5] = TT20[5] + T20[31] - 2;
                } else if (T20[j] == 32 && T20[32] < 0) {
                    TT20[11] = TT20[11] + T20[32] - 1;
                    TT20[5] = TT20[5] + T20[32] - 1;
                    TT20[3] = TT20[3] + T20[32] - 2;
                    TT20[7] = TT20[7] + T20[32] - 1;
                } else if (T20[j] == 33 && T20[33] < 0) {
                    TT20[10] = TT20[10] + T20[33] - 2;
                    TT20[11] = TT20[11] + T20[33] - 2;
                    TT20[12] = TT20[12] + T20[33] - 1;
                    TT20[1] = TT20[1] + T20[33] - 1;
                    TT20[3] = TT20[3] + T20[33] - 2;
                    TT20[8] = TT20[8] + T20[33] - 2;
                } else if (T20[j] == 34 && T20[34] < 0) {
                    TT20[12] = TT20[12] + T20[34] - 1;
                    TT20[16] = TT20[16] + T20[34] - 1;
                    TT20[13] = TT20[13] + T20[34] - 2;
                    TT20[2] = TT20[2] + T20[34] - 2;
                    TT20[3] = TT20[3] + T20[34] - 1;
                    TT20[7] = TT20[7] + T20[34] - 2;
                    TT20[8] = TT20[8] + T20[34] - 1;
                } else if (T20[j] == 35 && T20[35] < 0) {
                    TT20[12] = TT20[12] + T20[35] - 2;
                    TT20[13] = TT20[13] + T20[35] - 1;
                    TT20[14] = TT20[14] + T20[35] - 2;
                    TT20[16] = TT20[16] + T20[35] - 2;
                    TT20[1] = TT20[1] + T20[35] - 2;
                    TT20[3] = TT20[3] + T20[35] - 1;
                    TT20[2] = TT20[2] + T20[35] - 1;
                } else if (T20[j] == 36 && T20[36] < 0) {
                    TT20[12] = TT20[12] + T20[36] - 2;
                    TT20[13] = TT20[13] + T20[36] - 1;
                    TT20[16] = TT20[16] + T20[36] - 1;
                    TT20[2] = TT20[2] + T20[36] - 1;
                } else if (T20[j] == 37 && T20[37] < 0) {
                    TT20[11] = TT20[11] + T20[37] - 2;
                } else if (T20[j] == 38 && T20[38] < 0) {
                    TT20[12] = TT20[12] + T20[38] - 2;
                    TT20[3] = TT20[3] + T20[38] - 1;
                    TT20[5] = TT20[5] + T20[38] - 1;
                } else if (T20[j] == 39 && T20[39] < 0) {
                    TT20[10] = TT20[10] + T20[39] - 2;
                    TT20[11] = TT20[11] + T20[39] - 1;
                    TT20[2] = TT20[2] + T20[39] - 1;
                    TT20[3] = TT20[3] + T20[39] - 1;
                } else if (T20[j] == 40 && T20[40] < 0) {
                    TT20[8] = TT20[8] + T20[40] - 2;
                    TT20[6] = TT20[6] + T20[40] - 2;
                } else if (T20[j] == 41 && T20[41] < 0) {
                    TT20[10] = TT20[10] + T20[41] - 2;
                    TT20[2] = TT20[2] + T20[41] - 2;
                } else if (T20[j] == 42 && T20[42] < 0) {
                    TT20[12] = TT20[12] + T20[42] - 1;
                    TT20[15] = TT20[15] + T20[42] - 2;
                    TT20[14] = TT20[14] + T20[42] - 1;
                    TT20[5] = TT20[5] + T20[42] - 2;
                } else if (T20[j] == 43 && T20[43] < 0) {
                    TT20[11] = TT20[11] + T20[43] - 1;
                    TT20[12] = TT20[12] + T20[43] - 1;
                    TT20[15] = TT20[15] + T20[43] - 1;
                    TT20[18] = TT20[18] + T20[43] - 2;
                    TT20[3] = TT20[3] + T20[43] - 2;
                    TT20[5] = TT20[5] + T20[43] - 2;
                    TT20[7] = TT20[7] + T20[43] - 1;
                }
            }
            return [T20, TT20];
        }

    }

})();