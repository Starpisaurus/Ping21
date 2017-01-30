'use strict';

angular.module('statusApp')
    .controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {
        $scope.toLogin = () => {
            $location.url("/login");
        }


  }]);

angular.module('statusApp')
    .controller('LoginCtrl', ['$scope', 'HttpUtils', '$location', function ($scope, HttpUtils, $location) {
        $scope.user = {
            email: "",
            password: ""
        }
        
        $scope.loginError = "";

        $scope.attempLogin = function () {
            console.log('entrée');
            if ($scope.user) {
                console.log($scope.user);
                //var deferred = $q.defer();

                //var config = Utils.getHttpConfig('POST', Utils.getApiRoot() + '/user/login', /*User.getUser().token*/null, null, data);

                HttpUtils.request('POST', 'http://localhost:3333/users/login', $scope.user).then(
                    function  (data) {
                        if(data.status==200){
                            $location.path('/indexConnect')
                        }
                    }, function (error){
                        console.log(error);
                    });

            }
        }
      }]);

angular.module('statusApp')
    .controller('RegisterCtrl', ['$scope', function ($scope) {}]);