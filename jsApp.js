'use strict';

var myApp = angular.module('myApp', ['ui.router','ngAnimate','pascalprecht.translate']);


myApp.config(["$stateProvider", "$urlRouterProvider", "$locationProvider","$translateProvider", function ($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {

    $translateProvider.useStaticFilesLoader({
        prefix: 'lang/lang-',
        suffix: '.json'
    });
    $translateProvider.preferredLanguage('ru');
    $translateProvider.useSanitizeValueStrategy('escape');
    
    
    
    if (localStorage.getItem("userInfo")) {
        // For any unmatched url, redirect to /loginPageState
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