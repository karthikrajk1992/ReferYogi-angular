(function() {
    'use strict';
    /**
     * @ngdoc function
     * @name app.service:UserAjax
     * @description
     * # UserAjax
     * Service of the app
     */
    angular.module('angular-app').service("UserAjax", function($http, $state, $rootScope, $timeout) {
        this.request = function(method, endpoint, data) {
            var host = 'https://stagingapi.spini.co/v1/';
            var url = host + endpoint;
            var headers = {
                // "Accept": "application/json",
                // 'Access-Control-Allow-Origin' : '*',
                // 'Access-Control-Allow-Methods' : '*',
                // 'Access-Control-Allow-Headers' : 'Content-Type',
                "Content-Type": 'application/json',
                // 'Access-Token' : $rootScope.current_user.authentication_token
                'Authorization': "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI3fQ.-vu4hddMCmT33Z8C8LvOI-Eup6LpCAe88c97AzIwtN4"
                // 'Access-Token' : "$2a$10$Z1QJ46AB.9Qx/IDCIWqnTO20HogZNyOl7ztRDwqzl75nFaCbORNSW",
            }
            return $http({
                url: url,
                method: method,
                headers: headers,
                data: data
            }).then(function(response) {
                return response;
            }).catch(function(response) {
                $timeout(function() {
                    $rootScope.UserAjaxFailed = false;
                }, 3000);
            }).finally(function() {});
        };
    });
});
