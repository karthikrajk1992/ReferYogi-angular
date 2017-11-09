(function() {
    'use strict';
    /**
     * @ngdoc function
     * @name app.service:homeService
     * @description
     * # homeService
     * Service of the app
     */
    angular.module('redeemcoupon').service('redeemcouponService', redeemcouponService);
    redeemcouponService.$inject = ['$http', 'UserAjax', 'CommonService'];

    function redeemcouponService($http) {
        this.VendorCreate = function(data) {
            return UserAjax.request('POST', '/registration', data).then(function(response) {
                return response;
            });
        };
        this.VendorAuth = function(data) {
            return UserAjax.request('POST', '/user_token', data).then(function(response) {
                return response;
            });
        };

        // function VendorAuth(loginAuth, callback) {
        //     $http.post(apiBaseURL + 'user_token', {
        //         "auth": loginAuth
        //     }).then(function(response) {
        //         console.log(response);
        //         var response = response.data;
        //         // login successful if there's a token in the response
        //         if (response.jwt) {
        //             // store username and token in cookies storage to keep user logged in between page refreshes
        //             $cookies.put('role', 'vendor');
        //             // $cookies.put('name', response.name);
        //             $cookies.put('token', response.jwt);
        //             if (response.mobile) {
        //                 $cookies.put('mobile', response.mobile);
        //             }
        //             // add jwt token to auth header for all requests made by the $http service
        //             $http.defaults.headers.common.Authorization = 'Bearer ' + response.jwt;
        //             // execute callback with true to indicate successful login
        //             callback(true);
        //         } else {
        //             // execute callback with false to indicate failed login
        //             callback(false);
        //         }
        //     });
        // }
    }
})();
