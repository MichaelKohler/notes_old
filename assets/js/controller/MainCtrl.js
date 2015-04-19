'use strict';

angular.module('notes')
  .controller('MainCtrl', function($scope, $rootScope, $location, $translate) {
    $rootScope.locales = {
      'de': {
        id: 'de-ch',
        label: 'Deutsch'
      },
      'en': {
        id: 'en-us',
        label: 'English'
      }
    };

    $rootScope.changeLanguage = function(language) {
      $rootScope.currentLanguage = language;
      var localeID = $rootScope.locales[language].id;
      $translate.use(localeID);
    };

  });
