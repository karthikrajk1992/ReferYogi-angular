(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:homeService
	* @description
	* # homeService
	* Service of the app
	*/

	angular.module('signupModule')
		.service('signupService', signupService);

	signupService.$inject = ['$http'];

	function signupService($http) {

		var list = [
			{"feature": "Implemented Best Practices, following: John Papa's Guide"},
			{"feature": "Using Controller AS syntax"},
			{"feature": "Wrap Angular components in an Immediately Invoked Function Expression (IIFE)"},
			{"feature": "Declare modules without a variable using the setter syntax"},
			{"feature": "Using named functions"},
			{"feature": "Including Unit test with Karma"},
			{"feature": "Including UI options for Bootstrap or Angular-Material"},
			{"feature": "Including Angular-Material-Icons for Angular-Material UI"},
			{"feature": "Dynamic Menu generator for both themes"},
			{"feature": "Grunt task for Production and Development"}
		];

		return {
			getFeaturesList: getFeaturesList
		};

		function getFeaturesList() {
			return list;
		}
		// this.checkAuth =  function (params) {
	 //    return GuestAjax.request('POST', '/sessions/login', params).then(function (response) {
	    	
	 //      return response;
	 //    });
  // 	};

  // 	this.setCredentials =  function (current_user) {
	 //    $cookies.put('current_user', JSON.stringify(current_user));
  //     $rootScope.current_user = JSON.parse($cookies.get('current_user'));
  // 	};
		

	}

})();
