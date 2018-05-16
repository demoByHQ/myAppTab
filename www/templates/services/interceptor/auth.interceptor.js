/**
 * Created by hq on 2016/8/4.
 */
'use strict';

angular.module('handMobile')
  .factory('authInterceptor', function ( $q, $injector) {
    return {
      // Add authorization token to headers
      request: function (config) {
        console.log("login");
          $injector.get('$ionicLoading').show({
            template: '<img style="height: 3em" ng-src="img/adam.jpg">',
            noBackdrop: false
          });
        config.headers = config.headers || {};
        return config;
      }
    };
  })

  .factory('platformInterceptor', function ($q, $rootScope) {
    return {
      request: function (config) {
        config.headers = config.headers || {};
        if (ionic.Platform.isIOS()) {
          config.headers.Platform = 'IOS';
        } else if (ionic.Platform.isAndroid()) {
          config.headers.Platform = 'ANDROID';
        } else {
          config.headers.Platform = 'IOS';
        }
        return config;
      }
    };
  });
