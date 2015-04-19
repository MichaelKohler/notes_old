'use strict';

angular.module('notes')
  .config(function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: '../templates/welcome.html',
        controller: 'WelcomeCtrl'
      });
  });
