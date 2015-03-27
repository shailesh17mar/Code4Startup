'use strict';

/**
 * @ngdoc function
 * @name code4startupApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the code4startupApp
 */
angular.module('code4startupApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
