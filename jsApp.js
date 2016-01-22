'use strict';

var myApp = angular.module('myApp', ['ui.router','ngAnimate','pascalprecht.translate','ngIdle']);


myApp.run(['Idle', function(Idle){
    Idle.watch();
}]);

myApp.constant("CONSTANTS", {
    "LOCAL_STORAGE_KEY": "userInfo"
});

myApp.config(["$stateProvider", "$urlRouterProvider", "$locationProvider","$translateProvider", "IdleProvider", "KeepaliveProvider", "CONSTANTS", 
             function ($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider, IdleProvider, KeepaliveProvider, CONSTANTS) {

    // translation configuration
    $translateProvider.useStaticFilesLoader({
        prefix: 'lang/lang-',
        suffix: '.json'
    });
    
    $translateProvider.preferredLanguage('ru');
    $translateProvider.useSanitizeValueStrategy('escape');
    
    // configuration for expired session
    IdleProvider.idle(10); // in seconds
    IdleProvider.timeout(5); // in seconds
    
    
    if (localStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEY)) {
        $urlRouterProvider.otherwise("/mainPage");
    } else {
        $urlRouterProvider.otherwise("/loginPage");
        
    }
	
    $stateProvider
        .state('mainPageState', {
            url: "/mainPage",
            templateUrl: "app/templates/mainPage.html",
            controller: 'mainPageController'
            
        })
        .state('mainPageState.userProfile', {
            url: "/userProfile",
            templateUrl: "../app/templates/userInfo.html",
            controller: 'userInfoController'
        })
        .state('mainPageState.editProfile', {
            url: "/editProfile",
            templateUrl: "../app/templates/editProfile.html",
            controller: 'editProfileController'
        })
        .state('loginPageState', {
            url : "/loginPage",
            templateUrl : "app/templates/loginPage.html",
            controller : "loginController"
        })
        .state('forgotPasswordPageState', {
            url: "/forgotPasswordPage",
            templateUrl: "app/templates/forgotPasswordPage.html",
            controller: 'resetPasswordController'
        });
}]);