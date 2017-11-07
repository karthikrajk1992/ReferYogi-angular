(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name app.service:manageService
   * @description
   * # manageService
   * Service of the app
   */

  angular
    .module('angular-app')
    .service('homeService', function($http, UserAjax) {
      // debugger
      this.getOffer =  function() {
      	debugger
        // debugger
        return UserAjax.request('GET', '/home/offers', {}).then(function (response) {
        	debugger
          return response.data;
        });
      };
    });

})();