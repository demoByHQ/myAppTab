angular.module('handMobile')
  .controller('ContactDetailCtrl', function ($scope, $stateParams, $ionicHistory, $state) {

    $scope.view = {
      detail: {},
      goBack: function () {
        if ($ionicHistory.backView) {
          $ionicHistory.goBack();
        } else {
          $state.go('tab.contact');
        }
      },
    };
    $scope.view.detail = $stateParams.detail;
    console.log($scope.view.detail);
  });
