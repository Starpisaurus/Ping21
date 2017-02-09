'use strict';

var apiUrl = "http://localhost:3333";

angular.module('musicToolKitApp')
    .controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {
        //$location.url("/login");

  }]);

angular.module('musicToolKitApp')
    .controller('LoginCtrl', ['$scope', 'HttpUtils', '$location', function ($scope, HttpUtils, $location) {
        $scope.user = {
            email: "",
            password: ""
        }

        $scope.loginError = "";

        $scope.attempLogin = function () {
            if ($scope.user) {
                HttpUtils.request('POST', apiUrl + '/users/login', $scope.user).then(
                    function (data) {
                        if (data.status == 200) {
                            $location.path('/indexConnected');
                        } else {
                            $scope.loginError = "Wrong password or incorrect user !";
                        }
                    },
                    function (error) {
                        console.log(error);
                    });

            }
        }
      }]);

angular.module('musicToolKitApp')
    .controller('RegisterCtrl', ['$scope', 'HttpUtils', '$location', function ($scope, HttpUtils, $location) {
        $scope.newUser = {
            email: "",
            password: "",
            firstname: "",
            lastname: "",
            login: "",
        }

        $scope.attempRegister = function () {
            if ($scope.newUser) {
                            
                                $scope.newUser.password = $scope.register.password.$viewValue;
                                HttpUtils.request('POST', apiUrl + '/users/register', $scope.newUser);
            }
        }
    }]);