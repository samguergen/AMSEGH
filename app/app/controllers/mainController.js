var app = angular.module('myApp', []);

app.controller('MainController', ['$scope', function ($scope)  {
  $scope.test = "this is a test";
  
  console.log('inside main controller', $scope.test);
  
  
  $scope.testFunc = function() {
    console.log('function triggered');
  }
}]);