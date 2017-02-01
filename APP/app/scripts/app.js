'use strict';

/**
 * @ngdoc overview
 * @name musicToolKitApp
 * @description
 * # musicToolKitApp
 *
 * Main module of the application.
 */
angular
    .module('musicToolKitApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngAnimate'
  ])
    .config(function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix();
        $routeProvider
            .when('/', {
                templateUrl: 'views/accueil.html',
                controller: 'MainCtrl'
            })
            .when('/login', {
                templateUrl: 'views/connexion.html',
                controller: 'LoginCtrl'
            })
            .when('/register', {
                templateUrl: 'views/inscription.html',
                controller: 'RegisterCtrl'
            })
            .when('/indexConnected', {
                templateUrl: 'views/indexconnect.html',
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });