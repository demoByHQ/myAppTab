angular.module('starter')
  .controller('HomeCtrl', ['$scope', 'loginService', function ($scope, loginService) {
    $scope.data="";
    $scope.test = "heqi";

    loginService.getLogin($scope.test).success(function (data) {

      $scope.data = data;
      console.log(angular.toJson($scope.data));

    });

    console.log("12121212");

  }]);
