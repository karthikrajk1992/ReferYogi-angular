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
    redeemcouponService.$inject = ['$http','UserAjax','CommonService'];

    	function redeemcouponService($http) {
        this.offerView = function(data) {
            return UserAjax.request('POST', '/page_visits', data).then(function(response) {
                return response.data;
            });
        };

        function VendorCreate(vendor, callback) {
            $http.post(apiBaseURL + 'registration', {
                "registration": vendor
            }).then(function(response) {
                var response = response.data.data;
                // login successful if there's a token in the response
                if (response.attributes) {
                    callback(response.attributes);
                } else {
                    // execute callback with false to indicate failed login
                    callback(false);
                }
            }).catch(function(response) {
                ngToast.dismiss();
                ngToast.create({
                    content: response.data.errors[0].detail,
                    dismissOnTimeout: false,
                    dismissButton: true,
                    dismissOnClick: false
                });
            });
        }

        function VendorAuth(loginAuth, callback) {
            $http.post(apiBaseURL + 'user_token', {
                "auth": loginAuth
            }).then(function(response) {
                console.log(response);
                var response = response.data;
                // login successful if there's a token in the response
                if (response.jwt) {
                    // store username and token in cookies storage to keep user logged in between page refreshes
                    $cookies.put('role', 'vendor');
                    // $cookies.put('name', response.name);
                    $cookies.put('token', response.jwt);
                    if (response.mobile) {
                        $cookies.put('mobile', response.mobile);
                    }
                    // add jwt token to auth header for all requests made by the $http service
                    $http.defaults.headers.common.Authorization = 'Bearer ' + response.jwt;
                    // execute callback with true to indicate successful login
                    callback(true);
                } else {
                    // execute callback with false to indicate failed login
                    callback(false);
                }
            });
        }
    }
})();
