angular.module('handMobile')
  .controller('LoginCtrl', function ($scope, $state, loginService, $ionicPopup) {

    $scope.view = {
      userInfo: {}
    };

    $scope.login = function () {
      $scope.data = loginService.getUser($scope.view.userInfo);
      if ($scope.data.success) {
        $state.go("tab.home");
      } else {
        var alertPopup = $ionicPopup.alert({
          title: '提示',
          template: $scope.data.message
        });
      }
    };
  });
