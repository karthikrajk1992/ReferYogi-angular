(function() {
    'use strict';
    /**
     * @ngdoc function
     * @name app.service:CommonService
     * @description
     * # CommonService
     * Service of the app
     */
    angular.module('angular-app').service('commonService', function($http, UserAjax, homeService) {
        this.isReferral = function() {
            if ($cookies.get('role')) {
                if ($cookies.get('role') == 'referer') {
                    return true
                }
            }
            return false;
        }
        this.isVendor = function() {
            if ($cookies.get('role')) {
                if ($cookies.get('role') == 'vendor') {
                    return true
                }
            }
            return false;
        }
        this.trackingCode = function() {
            if ($cookies.get('trackingCode')) {
                return $cookies.get('trackingCode');
            }
            return null;
        }
        this.setTrackingCode = function(code) {
            $cookies.put('trackingCode', code);
        }
        this.authToken = function() {
            if ($cookies.get('token')) {
                return $cookies.get('token');
            }
            return false;
        }
        this.getCityCookie = function() {
            if ($cookies.get('city')) {
                return $cookies.get('city');
            }
            return false;
        }
        this.getCityCookieName = function() {
            if ($cookies.get('city_name')) {
                return $cookies.get('city_name');
            }
            return null;
        }
        this.cityCookie = function(id, name) {
            $cookies.put('city', id);
            $cookies.put('city_name', name);
            window.location.reload(); // reload the page after cookie set
        }
        this.ipAddress = function() {
            return document.getElementById("ip").value || null;
        }
        this.logout = function() {
            $cookies.remove('role');
            $cookies.remove('name');
            $cookies.remove('token');
            $cookies.remove('mobile');
            window.location = window.location.origin; // go to the home page
        }
    });
})();
