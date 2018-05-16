angular.module('handMobile')
  .controller('ContactCtrl', function ($scope, contactService, $location, $timeout, $ionicScrollDelegate, $state) {

    $scope.view = {
      contacts: [],
      searchName: "",
      aliasToast: false,
      aliasList: ['热', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z']
    };

    //获取通讯录列表
    contactService.allList().then(function (response) {
      $scope.view.contacts = response.data.contacts;
      $scope.view.aliasToast = false;
    });

    $scope.vc = {
      toastTimer: null,
      selectAlias: function (event, index) {
        var height = document.getElementById('draggableAlias').offsetHeight;
        var itemHeight = height / $scope.view.aliasList.length;
        var y = event.gesture.deltaY + itemHeight / 2;
        var rangeIndex = parseInt(y / itemHeight) + index;
        if (rangeIndex < 0) {
          rangeIndex = 0;
        } else if (rangeIndex >= $scope.view.aliasList.length) {
          rangeIndex = $scope.view.aliasList.length - 1;
        }
        $scope.view.aliasToast = true;
        if ($scope.view.alias != $scope.view.aliasList[rangeIndex]) {
          $scope.view.alias = $scope.view.aliasList[rangeIndex];
          $location.hash($scope.view.alias);
        }
        $ionicScrollDelegate.$getByHandle('contactsScroll').anchorScroll();
        $timeout.cancel($scope.view.toastTimer);
        $scope.view.toastTimer = $timeout(function () {
          $scope.view.aliasToast = false;
        }, 2000);
      }
    };

  });
