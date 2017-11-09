(function() {
    'use strict';
    /**
     * @ngdoc function
     * @name app.service:offerService
     * @description
     * # offerService
     * Service of the app
     */
    angular.module('angular-app').service('offerService', function($http, UserAjax, homeService, commonService) {
        this.offersClickTrack = function(offer_id) {
            var temp_cookie = 'OfferClickcode_' + offer_id;
            if ($cookies.get(temp_cookie)) {
                return;
            }
            var data = {
                "offer_click": {
                    "offer_id": offer_id,
                    "ip_address": commonService.ipAddress(),
                    "tracking_code": commonService.trackingCode()
                }
            };
            offerService.offerClickTrack(data).then(function(response) {
                var response = response.data.data;
                if (response.attributes) {
                    $cookies.put(temp_cookie, temp_cookie);
                }
            });
        };
        this.offersViewTrack = function() {
            var temp_cookie = 'code_' + document.getElementById("offer_id").value;
            if ($cookies.get(temp_cookie)) {
                return;
            }
            var data = {
                "page_visit": {
                    "url": window.location.href.replace('#!/', ''),
                    "offer_id": document.getElementById("offer_id").value,
                    "ip_address": document.getElementById("ip").value,
                    "tracking_code": document.getElementById("tracking_code").value
                }
            };
            offerService.offerView(data).then(function(response) {
                var response = response.data.data;
                if (response.attributes) {
                    $cookies.put(temp_cookie, temp_cookie);
                }
            })
        };
        this.UpdateSocialShare = function(url, tracking_code, media_type, offer_id) {
            var data = {
                "offer_share": {
                    "shared_url": url,
                    "offer_id": offer_id,
                    "tracking_code": commonService.trackingCode(),
                    "shared_tracking_code": tracking_code,
                    "social_media": media_type,
                    "ip_address": commonService.ipAddress()
                }
            };
            this.offerShare(data).then(function(response) {
                var response = response.data.data;
                if (response.attributes) {
                    response.attributes;
                } else {}
            });
        };
        this.offerClickTrack = function(data) {
            return UserAjax.request('POST', '/offer_clicks', data).then(function(response) {
                return response.data;
            });
        };
        this.offerShare = function(data) {
            return UserAjax.request('POST', '/offer_shares', data).then(function(response) {
                return response.data;
            });
        };
        this.offerView = function(data) {
            return UserAjax.request('POST', '/page_visits', data).then(function(response) {
                return response.data;
            });
        };
    })
})
();
