'use strict';

var apiUrl = "http://localhost:3333";

angular.module('musicToolKitApp')
    .controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {
        $location.url("/login");

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
                            $location.path('/indexConnect');
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
            confirm_password: ""
        }

        $scope.attempRegister = function () {
            if ($scope.newUser) {
                if ($scope.newUser.password == $scope.newUser.confirm_password) {

                                HttpUtils.request('POST', apiUrl + '/users/register', $scope.newUser);
                }
                else{
                    $scope.error = "Les deux mots de passe doivent être égaux !";
                }
            }
        }
    }]);