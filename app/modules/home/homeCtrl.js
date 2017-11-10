(function() {
    'use strict';
    /**
     * @ngdoc function
     * @name app.controller:HomeCtrl
     * @description
     * # HomeCtrl
     * Controller of the app
     */
    angular.module('angular-app').controller('HomeCtrl', Home);
    Home.$inject = ['homeService', ];
    /*
     * recommend
     * Using function declarations
     * and bindable members up top.
     */
    function Home(homeService) {
        var vm = this;
        vm.isReferral = function() {
            return false;
        }
        homeService.getOffer().then(function(response) {
            vm.offers = response.data;
        });
        homeService.getPreloadData().then(function(response) {
            vm.PreloadedData = response.data;

        });
    }
})();
