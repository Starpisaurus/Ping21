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
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
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
                //controller: 'RegisterCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    });