'use strict';

angular.module('musicToolKitApp')
    .service('HttpUtils', ['$q', '$http', function ($q, $http) {
        function request(method, url, data) {
            var header = {
                'Content-Type': 'application/json;charset=utf-8',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,DELETE,POST'
            }
            var config = {
                method: method,
                url: url,
                data: data,
                header: header
            }
            var deferred = $q.defer();

            $http(config).then(function successCallback(data, status, headers, config) {
                    console.log(data);
                    deferred.resolve(data);
                },
                function errorCallback(data, status, headers, config) {
                deferred.reject(status);
                });

            return deferred.promise; 
        }

        return {
            request: request
        };
  }]);