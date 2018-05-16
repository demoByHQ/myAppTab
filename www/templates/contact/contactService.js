'use strict';
angular.module('handMobile')
  .factory('contactService', ['$http', '$q',
    function ($http, $q) {
      return {
        allList: function () {
          var dataUrl = "data/contacts.json";
          // return $http.get(dataUrl);
          return $http({
            method: 'get',
            url: dataUrl
          });
        }
      }
    }]);
