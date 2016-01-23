'use strict';

var myApp = angular.module('myApp', ['ui.router','ngAnimate','pascalprecht.translate','ngIdle']);


myApp.run(['Idle', function(Idle){
    Idle.watch(); // start observing user site usage (for expired session)
}]);

myApp.constant("CONSTANTS", {
    "LOCAL_STORAGE_KEY": "userInfo" // constant to set and get info about user in localStorage 
});

myApp.config(["$stateProvider", "$urlRouterProvider", "$locationProvider","$translateProvider", "IdleProvider", "KeepaliveProvider", "CONSTANTS", 
             function ($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider, IdleProvider, KeepaliveProvider, CONSTANTS) {

    // translation configuration
    $translateProvider.useStaticFilesLoader({
        prefix: 'lang/lang-',
        suffix: '.json'
    });
    
    // russian is more preferable 
    $translateProvider.preferredLanguage('ru');
    $translateProvider.useSanitizeValueStrategy('escape');
    
    // configuration for expired session
    IdleProvider.idle(10); // in seconds
    IdleProvider.timeout(5); // in seconds
    

    if (localStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEY)) { // if user is not authorized 
        $urlRouterProvider.otherwise("/mainPage");
    } else {
        $urlRouterProvider.otherwise("/loginPage");
        
    }
	
    $stateProvider
        .state('mainPageState', {
            url: "/mainPage",
            templateUrl: "app/templates/mainPage.tpl.html",
            controller: 'mainPageController'
            
        })
        .state('mainPageState.userProfile', {
            url: "/userProfile",
            templateUrl: "../app/templates/userInfo.tpl.html",
            controller: 'userInfoController'
        })
        .state('mainPageState.editProfile', {
            url: "/editProfile",
            templateUrl: "../app/templates/editProfile.tpl.html",
            controller: 'editProfileController'
        })
        .state('loginPageState', {
            url : "/loginPage",
            templateUrl : "app/templates/loginPage.tpl.html",
            controller : "loginController"
        })
        .state('forgotPasswordPageState', {
            url: "/forgotPasswordPage",
            templateUrl: "app/templates/forgotPasswordPage.tpl.html",
            controller: 'resetPasswordController'
        });
}]);