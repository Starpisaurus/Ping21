'use strict';

/**
 * @ngdoc overview
 * @name statusApp
 * @description
 * # statusApp
 *
 * Main module of the application.
 */
angular
    .module('statusApp', [
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
            .otherwise({
                redirectTo: '/'
            });
    $locationProvider.html5Mode({ enabled: true, requireBase: false });
    });