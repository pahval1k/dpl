'use strict';


myApp.service('preferencesService', ['$timeout', function ($timeout) {
    
    
    this.gradations = ['red','white','green'];
    this.selectedColors = [];
    this.selectedPosButton = -1;
    this.selectedNegButton = -1;

    this.selectColor = function(letterIndex, gradationIndex) {
        this.selectedColors[letterIndex] = gradationIndex;
    }
    
    this.selectNegativeLetter = function(index) { 
        this.selectedNegButton = index;
    }
    
    this.selectPositiveLetter = function(index) {
        this.selectedPosButton = index;
    }

    this.isFormValid = function(selectedPosButton, selectedNegButton, selectedColors) {
        if (selectedPosButton == -1 || selectedNegButton == -1) {
            return false;
        }
        var selectedLettersLength = selectedColors.length;
        for (var j = 0; j < selectedLettersLength ; j++ ) {
            if (selectedColors[j] == undefined ) {
                return false;
            }
        }

        return true;
    }


    
    
}]);