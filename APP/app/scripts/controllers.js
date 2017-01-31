'use strict';

angular.module('musicToolKitApp')
    .controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {
        $scope.toLogin = () => {
            $location.url("/login");
        }


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
                //var deferred = $q.defer();

                //var config = Utils.getHttpConfig('POST', Utils.getApiRoot() + '/user/login', /*User.getUser().token*/null, null, data);

                HttpUtils.request('POST', 'http://localhost:3333/users/login', $scope.user).then(
                    function  (data) {
                        if(data.status==200){
                            $location.path('/indexConnect');
                        }
                        else{
                            $scope.loginError = "Wrong password or incorrect user !";
                        }
                    }, function (error){
                        console.log(error);
                    });

            }
        }
      }]);

angular.module('musicToolKitApp')
    .controller('RegisterCtrl', ['$scope', function ($scope) {}]);