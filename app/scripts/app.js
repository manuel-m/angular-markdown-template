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
      .when('/item1', {
        templateUrl: 'views/item1.html',
        controller: 'Item1Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
