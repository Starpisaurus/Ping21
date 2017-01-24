'use strict';

angular.module('statusApp')
  .controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.toLogin = ()=>{
        console.log("mdr");
        $location.url("/login");
    }
      
      
  }]);

angular.module('statusApp')
  .controller('LoginCtrl', ['$scope', function ($scope) {
  }]);

angular.module('statusApp')
  .controller('RegisterCtrl', ['$scope', function ($scope) {
  }]);