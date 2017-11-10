(function() {
    'use strict';
    /**
     * @ngdoc function
     * @name app.service:homeService
     * @description
     * # homeService
     * Service of the app
     */
    angular.module('angular-app').service('homeService', function($http,UserAjax) {
        this.getOffer = function() {
            return UserAjax.request('GET', '/home/offers', {}).then(function(response) {
                return response.data;
            });
        };
        this.getPreloadData = function() {
            return UserAjax.request('GET', '/home/preload_data', {}).then(function(response) {
                return response.data;
            });
        };
    });
})();

