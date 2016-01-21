'use strict';

myApp.service('loginService', ['$http', function ($http) {
  return function (emailValue, passwordValue) {
    return $http({
        method: "POST",
        url: "/userEntry",
        data: {
            email: emailValue,
            password: passwordValue
        }
    });
  }
}]);