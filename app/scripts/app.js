'use strict';

/**
 * @ngdoc overview
 * @name code4startupApp
 * @description
 * # code4startupApp
 *
 * Main module of the application.
 */
angular
  .module('code4startupApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/post', {
        templateUrl: 'views/post.html',
        controller: 'tasksCtrl'
      })
      .when('/edit', {
        templateUrl: 'views/edit.html',  
        controller: 'tasksCtrl'
      })
      .when('/browse', {
        templateUrl: 'views/browse.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
