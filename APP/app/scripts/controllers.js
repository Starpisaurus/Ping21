'use strict';

angular.module('statusApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.strings = {
        "lol": "1",
        "mdr": 1000
    }
  }]);

angular.module('statusApp')
  .controller('LoginCtrl', ['$scope', function ($scope) {
  }]);

angular.module('statusApp')
  .controller('RegisterCtrl', ['$scope', function ($scope) {
  }]);