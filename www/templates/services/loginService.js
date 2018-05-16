'use strict';
angular.module('handMobile')
  .factory('loginService', ['$http', '$q',
    function ($http, $q) {
      return {
        getLogin: function () {
          console.log("11111111111111");
          return $http({
            url: 'https://www.runoob.com/try/angularjs/data/sites.php',
            method: 'GET'
          });

        }
      }
    }]);
