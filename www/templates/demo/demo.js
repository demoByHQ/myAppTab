angular.module('starter')
  .controller('DemoCtrl', function ($scope, contactService) {

    $scope.Contacts = "heqi";
    // angular.module('MKApp')

    $scope.data = contactService.allList();

    console.log($scope.data);

    console.log("12121212");

    $scope.detail=function(item){
      console.log("12121212",item);
    }

    $scope.add=function(){
      $scope.data = contactService.add();

    };
  });
