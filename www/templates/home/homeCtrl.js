angular.module('handMobile')
  .controller('HomeCtrl', ['$scope', 'loginService', 'contactService', function ($scope, contactService) {
    $scope.data = "";
    $scope.test = "heqi";

    // loginService.getLogin($scope.test).success(function (data) {
    //   $scope.data = data;
    //   console.log(angular.toJson($scope.data));
    //
    // });
    console.log("12121212");

    // $scope.Contacts = "heqi";
    //
    // $scope.data = contactService.allList();
    //
    // console.log($scope.data);
    //
    // $scope.detail = function (item) {
    //   console.log("selectItem", item);
    //   $state.go('tab.detail', {detail: item});
    // };
    //
    // $scope.add = function () {
    //   $scope.data = contactService.add();
    // };
  }]);
