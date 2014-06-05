angular.module('ionicApp', ['ionic'])
.controller('MyController', function($scope, $http) {
  $scope.items = [1,2,3];
  $scope.doRefresh = function() {
    $http.get('item.json')
     .success(function(data) {
       $scope.items = data;
     })
     .finally(function() {
       // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
     });
  };
});