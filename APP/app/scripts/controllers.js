'use strict';

angular.module('statusApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.strings = {
        "lol": "1",
        "mdr": 1000
    }
  }]);
