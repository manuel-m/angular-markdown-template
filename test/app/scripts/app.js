'use strict';

/**
 * @ngdoc overview
 * @name pragmacareApp
 * @description
 * # pragmacareApp
 *
 * Main module of the application.
 */
angular
  .module('pragmacareApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'btford.markdown'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/RP', {
        templateUrl: 'views/rp.html',
        controller: 'RpCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
