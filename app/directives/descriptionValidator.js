'use strict';

myApp.directive('descriptionValidator', function ($compile) { // declaring directive for greeting text validating 
	return {
		restrict: 'A', // allowed to use only as a attribute
	    require: 'ngModel', // required ngModel attribute
	    link: function(scope, element, attrs, ctrl) {
            
            var moreThanThreeRegexp = /^[А-Я][а-я\s]{3,}$/; // text should be more than 3 symbols 
	        
            var firstLetterUpRegexp = /^[А-Я]/; // this regexp checks whether first letter of description about user is in UPPERCASE
            
            var onlyFirstLetterUpRegexp = /^[А-Я][а-я\s]+$/; // this regexp checks whether only first letter of description about user is UPPERCASE
            
            var russianSymbolsRegexp = /^[А-я\s]+$/; // this regexp checks whether all letters are russian 

            function changeInvalidMessage(elem, message) { // change message about invalid date 
                elem.innerHTML = message;
            }
            
            // alert message if text isn't valid
	    	var template = '<span id="invalidDescriptionMessage" ng-show="editProfileForm.descriptionField.$error.descriptionValidator"></span>';
			var validMessage = $compile(template)(scope);
			element.after(validMessage);	
            var invalidDateMessageElm = document.getElementById("invalidDescriptionMessage");
	        ctrl.$validators.descriptionValidator = function(modelValue, viewValue) {

                
                var invalidMessage;

		        if (ctrl.$isEmpty(viewValue)) { // consider empty view value to be invalid
		          invalidMessage = "Your description text is empty, fill in this field";
                  changeInvalidMessage(invalidDateMessageElm, invalidMessage);
		          return false;
		        }
                
                if (!firstLetterUpRegexp.test(viewValue)) { // if first letter is isn't UPPERCASE
		          invalidMessage = "First letter of the text should be UPPERCASE";
                  changeInvalidMessage(invalidDateMessageElm, invalidMessage);
		          return false;
		        }
                
                if (!russianSymbolsRegexp.test(viewValue)) { // if description isn't in Russian
		          invalidMessage = "Description should be only in Russian";
                  changeInvalidMessage(invalidDateMessageElm, invalidMessage);
		          return false;
		        }
                
                if (!onlyFirstLetterUpRegexp.test(viewValue)) { // if not only first letter of description about user is UPPERCASE
		          invalidMessage = "only first letter of the text should be UPPERCASE";
                  changeInvalidMessage(invalidDateMessageElm, invalidMessage);
		          return false;
		        }
                
                if (!moreThanThreeRegexp.test(viewValue)) { // if there is no more than three symbols 
		          invalidMessage = "Description should contain more than three symbols";
                  changeInvalidMessage(invalidDateMessageElm, invalidMessage);
		          return false;
		        }

		        // it is valid
		        return true;
	        };
	    }
    };
});