'use strict';

var app = angular.module('notes', [
  'pascalprecht.translate',
  'ui.router'
]);

app.config(['$translateProvider', function ($translateProvider) {
  $translateProvider.useStaticFilesLoader({
    prefix: '/assets/i18n/main.',
    suffix: '.json'
  });

  $translateProvider.preferredLanguage('en-us');
}]);
