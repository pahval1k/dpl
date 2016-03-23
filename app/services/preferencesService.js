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
    
    
}]);