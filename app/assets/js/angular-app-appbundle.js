/*!
* angular-app - v0.0.1 - MIT LICENSE 2017-11-07. 
* @author Kathik
*/
(function() {
	'use strict';

	/**
	* @ngdoc index
	* @name app
	* @description
	* # app
	*
	* Main module of the application.
	*/

	angular.module('angular-app', [
		'ngResource',
		'ngAria',
		 'ui.bootstrap',
		
		'ngCookies',
		'ngAnimate',
		'ngTouch',
		'ngSanitize',
		'ui.router',
		'home',
	]);

})();

(function () {
	'use strict';

	/**
	 * @ngdoc configuration file
	 * @name app.config:config
	 * @description
	 * # Config and run block
	 * Configutation of the app
	 */


	angular
		.module('angular-app')
		.config(configure)
		.run(runBlock);

	configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

	function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

		$locationProvider.hashPrefix('!');

		// This is required for Browser Sync to work poperly
		$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

		
		$urlRouterProvider
			.otherwise('/');
		
	}

	runBlock.$inject = ['$rootScope'];

	function runBlock($rootScope) {
		'use strict';

		console.log('AngularJS run() function...');
	}


})();

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.module:homeModule
	* @description
	* # homeModule
	* Module of the app
	*/

	angular.module('home', []);
})();

'use strict';

	/**
	* @ngdoc function
	* @name app.route:HomeRoute
	* @description
	* # HomeRoute
	* Route of the app
	*/

angular.module('angular-app')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			
			.state('home', {
				url: '/',
				templateUrl: 'app/modules/home/home.html',
				controller: 'HomeCtrl',
				controllerAs: 'vm'
			});
			
	}]);

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:HomeCtrl
	* @description
	* # HomeCtrl
	* Controller of the app
	*/

	angular
		.module('angular-app')
		.controller('HomeCtrl', Home);

	Home.$inject = ['homeService'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Home(homeService) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "Hello, angular-app!";
		vm.version = "1.0.0";
		homeService.getOffer().then(function(response){
			vm.offers = response.data;
			debugger
		});

	}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:NavBarCtrl
	* @description
	* # NavBarCtrl
	* Controller of the app
	*/

	angular
		.module('angular-app')
		.controller('NavBarCtrl', NavBar);

	NavBar.$inject = ['homeService', 'MenuService'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function NavBar(homeService, MenuService) {
		/*jshint validthis: true */
		var vm = this;
		vm.title = "angular-app";

		vm.menu = MenuService.listMenu();

	}

})();

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
'use strict';

(function () {

	/**
	* @ngdoc function
	* @name app.service:menuService
	* @description
	* # menuService
	* Service of the app
	*/

	angular
		.module('angular-app')
		.factory('MenuService', Menu);

	// Inject your dependencies as .$inject = ['$http', '$anotherDependency'];
	// function Name ($http, $anotherDependency) {...}

	Menu.$inject = ['$http'];

	function Menu($http) {
		// Sample code.

		var menu = [
			{
				link: '.',
				name: 'This is a Placeholder menu. It disappears when the first module has been created.'
			}
		];

		return {
			listMenu: function () {
				return menu;
			}
		}

	}

})();

(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name app.service:ajaxService
   * @description
   * # companiesService
   * Service of the app
   */

  angular
    .module('angular-app')
    .service("GuestAjax", function($http, $state, $rootScope, $timeout){

    function swalert(errorresponse)
    {
      swal({
     // title: "Success!",
      text: errorresponse,
      width: 400,
      height: 200,
      type: "", //success,error
      timer: 3000,
      showConfirmButton: false
    })
    }

      this.request = function(method, endpoint, data){

        var host = 'http://localhost:3000';
        // var host = 'http://freshgrc-production3193.cloudapp.net';
        var apiPath = '/api/v1';
        var url = host + apiPath + endpoint;
        var headers = {
          "Accept": "application/json",
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods' : '*',
          "Content-Type": 'application/json'
        }

        return $http({
          url: url,
          method: method,
          withCredentials: true,
          headers: headers,
          data: data
        }).then(function(response) {
          return response;
        })
          .catch(function(response) {

            if (response.status == 401) {

              $rootScope.current_user.authentication_token="";
              // alert($rootScope.current_user.authentication_token);
              $state.go('login');
              swal("Username/password/Sub Domain is wrong. ");

            }
     if (response.status == 400) {

      swalert("This response means that server could not understand the request due to invalid syntax.");
        // alert(response.statusText +  response.data.exception);
      }
      if (response.status == 402) {
      swalert("This response code is reserved for future use. Initial aim for creating this code was using it for digital payment systems however this is not used currently.");
      }
      if (response.status == 403) {
      swalert("Client does not have access rights to the content so server is rejecting to give proper response.");
      }
      if (response.status == 404) {
      swalert("Server can not find requested resource. This response code probably is most famous one due to its frequency to occur in web.");
      }
      if (response.status == 405) {
      swalert("The request method is known by the server but has been disabled and cannot be used. The two mandatory methods, GET and HEAD, must never be disabled and should not return this error code.");
      }
      if (response.status == 406) {
      swalert("This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content following the criteria given by the user agent.");
      }
      if (response.status == 407) {
      swalert("This is similar to 401 but authentication is needed to be done by a proxy.");
      }
      if (response.status == 408) {
      swalert("The server would like to shut down this unused connection");
      }
      if (response.status == 409) {
      swalert("This response would be sent when a request conflict with current state of server.");
      }
      if (response.status == 410) {
      swalert("This response would be sent when requested content has been deleted from server.");
      }
      if (response.status == 411) {
      swalert("Server rejected the request because the Content-Length header field is not defined and the server requires it.");
      }
      if (response.status == 412) {
      swalert("The client has indicated preconditions in its headers which the server does not meet.");
      }
      if (response.status == 422) {

        return response;
     

      swalert("These data's are used.pls change your data's.");
      }
      if (response.status == 500) {
      swalert("The server has encountered a situation it doesn't know how to handle. Contact Support");
      }
      if (response.status == 501) {
      swalert("The request method is not supported by the server and cannot be handled.");
      }
      if (response.status == 502) {
      swalert("The server, while working as a gateway to get a response needed to handle the request, got an invalid response.");
      }
      if (response.status == 503) {
      swalert("Common causes are a server that is down for maintenance or that is overloaded. ");
      }
      if (response.status == 504) {
      swalert("This error response is given when the server is acting as a gateway and cannot get a response in time.");
      }
      if (response.status == 505) {
      swalert("The HTTP version used in the request is not supported by the server.");
      }
      if (response.status == 506) {
      swalert("The server has an internal configuration error: transparent content negotiation for the request results in a circular reference.");
      }
      if (response.status == 507) {
      swalert("The server has an internal configuration error");
      }
      if (response.status == 511) {
      swalert("lient needs to authenticate to gain network access.");
      }
      if (response.statusTest == "Unauthorized"){
        return response;
      }
      

            $timeout(function() {
              $rootScope.GuestAjaxFailed = false;
            }, 3000);
          }).finally(function() {
            // // console.log("Completed GuestAjax");
          });
      };
    });

  angular
    .module('angular-app')
    .service("UserAjax", function($http, $state, $rootScope, $timeout){

      function swalert(errorresponse)
    {
      swal({
      title: "error",
      text: errorresponse,
      width: 400,
      height: 200,
      type: "", //success,error
      timer: 3000,
      showConfirmButton: false
    })
    }

    function swalert_for_not_authorised(errorresponse, title)
    {
      swal({
      title: title,
      text: errorresponse,
      width: 400,
      height: 200,
      type: "", //success,error
      confirmButtonText: "Okay..!",
      closeOnConfirm: false},
      function() {
        window.history.back();
        swal.close();
      });

    }

      this.request = function(method, endpoint, data){

         var host = 'https://stagingapi.spini.co/v1/';
        // var host = 'http://freshgrc-production3193.cloudapp.net';
        // var apiPath = '/api/v1';
        var url = host + endpoint;
        var headers = {
          // "Accept": "application/json",
          // 'Access-Control-Allow-Origin' : '*',
          // 'Access-Control-Allow-Methods' : '*',
          // 'Access-Control-Allow-Headers' : 'Content-Type',
          "Content-Type": 'application/json',
          // 'Access-Token' : $rootScope.current_user.authentication_token
           'Authorization' : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjI3fQ.-vu4hddMCmT33Z8C8LvOI-Eup6LpCAe88c97AzIwtN4"
          // 'Access-Token' : "$2a$10$Z1QJ46AB.9Qx/IDCIWqnTO20HogZNyOl7ztRDwqzl75nFaCbORNSW",
        }
        debugger
        return $http({
          url: url,
          method: method,
          // withCredentials: true,
          headers: headers,
          data: data
        }).then(function(response) {
          return response;
          if (response.status == 422) {
            $mdToast.show(
              $mdToast.simple()
              .content('You have errors in your submission.')
              .position('top right')
              .hideDelay(2000)
            );
          }
          return response;


        })
          .catch(function(response) {
            // if (response.status == 401) {

//               if ($rootScope.current_user.authentication_token != undefined) {
//                 $state.go($state.previous);
//                swalert_for_not_authorised("Authorisation is needed to get requested response.", "Not Authorised");
//               }
//               else {
//                 $state.go('login');
//               }

            // }
      if (response.status == 401) {
        // $state.go('home.dashboard');
           //$state.go('login');
        // $state.go($state.current, {}, {reload: true});
        // alert($rootScope.current_user.authentication_token);
        swal("No Privilege.");
      }
     if (response.status == 400) {
      swalert("This response means that server could not understand the request due to invalid syntax.");
        // alert(response.statusText +  response.data.exception);
      }
      if (response.status == 402) {
      swalert("This response code is reserved for future use. Initial aim for creating this code was using it for digital payment systems however this is not used currently.");
      }
      if (response.status == 403) {
      swalert("Client does not have access rights to the content so server is rejecting to give proper response.");
      }
      if (response.status == 404) {
      swalert("Server can not find requested resource. This response code probably is most famous one due to its frequency to occur in web.");
      }
      if (response.status == 405) {
      swalert("The request method is known by the server but has been disabled and cannot be used. The two mandatory methods, GET and HEAD, must never be disabled and should not return this error code.");
      }
      if (response.status == 406) {
      swalert("This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content following the criteria given by the user agent.");
      }
      if (response.status == 407) {
      swalert("This is similar to 401 but authentication is needed to be done by a proxy.");
      }
      if (response.status == 408) {
      swalert("The server would like to shut down this unused connection");
      }
      if (response.status == 409) {
      swalert("This response would be sent when a request conflict with current state of server.");
      }
      if (response.status == 410) {
      swalert("This response would be sent when requested content has been deleted from server.");
      }
      if (response.status == 411) {
      swalert("Server rejected the request because the Content-Length header field is not defined and the server requires it.");
      }
      if (response.status == 412) {
      swalert("The client has indicated preconditions in its headers which the server does not meet.");
      }
      if (response.status == 500) {
      swalert("The server has encountered a situation it doesn't know how to handle");
      }
      if (response.status == 501) {
      swalert("The request method is not supported by the server and cannot be handled.");
      }
      if (response.status == 502) {
      swalert("The server, while working as a gateway to get a response needed to handle the request, got an invalid response.");
      }
      if (response.status == 503) {
      swalert("Common causes are a server that is down for maintenance or that is overloaded. ");
      }
      if (response.status == 504) {
      swalert("This error response is given when the server is acting as a gateway and cannot get a response in time.");
      }
      if (response.status == 505) {
      swalert("The HTTP version used in the request is not supported by the server.");
      }
      if (response.status == 506) {
      swalert("The server has an internal configuration error: transparent content negotiation for the request results in a circular reference.");
      }
      if (response.status == 507) {
      swalert("The server has an internal configuration error");
      }
      if (response.status == 511) {
      swalert("lient needs to authenticate to gain network access.");
      }


            $timeout(function() {
              $rootScope.UserAjaxFailed = false;
            }, 3000);
          }).finally(function() {
          });
      };
    });

  angular
    .module('angular-app')
    .service("UserAjaxWithFile", function($http, $state, $rootScope, $timeout, Upload){
      this.request = function(method, endpoint, data){
        var host = 'http://localhost:3000';
        // var host = 'http://freshgrc-production3193.cloudapp.net';

        var apiPath = '/api/v1';
        var url = host + apiPath + endpoint;
        var headers = {
          'Access-Token' : $rootScope.current_user.authentication_token
        }

        return Upload.upload({
        url: url,
        data: data,
        headers: headers
        }).then(function (response) {
          return response;
        });


      };
    });

    angular
    .module('angular-app')
    .service("UsersigninAjax", function($http, $state, $rootScope, $timeout){

    function swalert(errorresponse)
    {
      swal({
     // title: "Success!",
      text: errorresponse,
      width: 400,
      height: 200,
      type: "", //success,error
      timer: 3000,
      showConfirmButton: false
    })
    }

      this.request = function(method, endpoint, data){

        var host = 'http://localhost:3000';
        // var host = 'http://freshgrc-production3193.cloudapp.net';
        var apiPath = '/api/v1';
        var url = host + apiPath + endpoint;
        var headers = {
          "Accept": "application/json",
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods' : '*',
          "Content-Type": 'application/json'
        }

        return $http({
          url: url,
          method: method,
          withCredentials: true,
          headers: headers,
          data: data
        }).then(function(response) {
          return response;
        })
          .catch(function(response) {

            if (response.status == 401) {

              return response;

            }
     if (response.status == 400) {

      swalert("This response means that server could not understand the request due to invalid syntax.");
        // alert(response.statusText +  response.data.exception);
      }
      if (response.status == 402) {
      swalert("This response code is reserved for future use. Initial aim for creating this code was using it for digital payment systems however this is not used currently.");
      }
      if (response.status == 403) {
      swalert("Client does not have access rights to the content so server is rejecting to give proper response.");
      }
      if (response.status == 404) {
      swalert("Server can not find requested resource. This response code probably is most famous one due to its frequency to occur in web.");
      }
      if (response.status == 405) {
      swalert("The request method is known by the server but has been disabled and cannot be used. The two mandatory methods, GET and HEAD, must never be disabled and should not return this error code.");
      }
      if (response.status == 406) {
      swalert("This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content following the criteria given by the user agent.");
      }
      if (response.status == 407) {
      swalert("This is similar to 401 but authentication is needed to be done by a proxy.");
      }
      if (response.status == 408) {
      swalert("The server would like to shut down this unused connection");
      }
      if (response.status == 409) {
      swalert("This response would be sent when a request conflict with current state of server.");
      }
      if (response.status == 410) {
      swalert("This response would be sent when requested content has been deleted from server.");
      }
      if (response.status == 411) {
      swalert("Server rejected the request because the Content-Length header field is not defined and the server requires it.");
      }
      if (response.status == 412) {
      swalert("The client has indicated preconditions in its headers which the server does not meet.");
      }
      if (response.status == 422) {
        // return response;

      swalert("These data's are used.pls change your data's.");
      }
      if (response.status == 500) {
      swalert("The server has encountered a situation it doesn't know how to handle. Contact Support");
      }
      if (response.status == 501) {
      swalert("The request method is not supported by the server and cannot be handled.");
      }
      if (response.status == 502) {
      swalert("The server, while working as a gateway to get a response needed to handle the request, got an invalid response.");
      }
      if (response.status == 503) {
      swalert("Common causes are a server that is down for maintenance or that is overloaded. ");
      }
      if (response.status == 504) {
      swalert("This error response is given when the server is acting as a gateway and cannot get a response in time.");
      }
      if (response.status == 505) {
      swalert("The HTTP version used in the request is not supported by the server.");
      }
      if (response.status == 506) {
      swalert("The server has an internal configuration error: transparent content negotiation for the request results in a circular reference.");
      }
      if (response.status == 507) {
      swalert("The server has an internal configuration error");
      }
      if (response.status == 511) {
      swalert("lient needs to authenticate to gain network access.");
      }
      if (response.statusTest == "Unauthorized"){
        return response;
      }
      

            $timeout(function() {
              $rootScope.GuestAjaxFailed = false;
            }, 3000);
          }).finally(function() {
            // // console.log("Completed GuestAjax");
          });
      };
    });


    angular
    .module('angular-app')
    .service("UserAjaxWithPDF", function($http, $state, $rootScope, $timeout){

      function swalert(errorresponse)
    {
      swal({
      title: "error",
      text: errorresponse,
      width: 400,
      height: 200,
      type: "", //success,error
      timer: 3000,
      showConfirmButton: false
    })
    }

    function swalert_for_not_authorised(errorresponse, title)
    {
      swal({
      title: title,
      text: errorresponse,
      width: 400,
      height: 200,
      type: "", //success,error
      confirmButtonText: "Okay..!",
      closeOnConfirm: false},
      function() {
        window.history.back();
        swal.close();
      });

    }

      this.request = function(method, endpoint, data){

         var host = 'http://localhost:3000';
        // var host = 'http://freshgrc-production3193.cloudapp.net';
        var apiPath = '/api/v1';
        var url = host + apiPath + endpoint;
        var headers = {
          'Access-Token' : $rootScope.current_user.authentication_token,
          'Accept' : 'application/pdf'
        }
        return $http({
          url: url,
          method: method,
          withCredentials: true,
          headers: headers,
          data: data,
          responseType: 'arraybuffer'
        }).then(function(response) {

          if (response.status == 422) {
            $mdToast.show(
              $mdToast.simple()
              .content('You have errors in your submission.')
              .position('top right')
              .hideDelay(2000)
            );
          }
          return response;


        })
          .catch(function(response) {
            // if (response.status == 401) {

//               if ($rootScope.current_user.authentication_token != undefined) {
//                 $state.go($state.previous);
//                swalert_for_not_authorised("Authorisation is needed to get requested response.", "Not Authorised");
//               }
//               else {
//                 $state.go('login');
//               }

            // }
      if (response.status == 401) {
        // $state.go('home.dashboard');
           //$state.go('login');
        // $state.go($state.current, {}, {reload: true});
        // alert($rootScope.current_user.authentication_token);
        swal("No Privilege.");
      }
     if (response.status == 400) {
      swalert("This response means that server could not understand the request due to invalid syntax.");
        // alert(response.statusText +  response.data.exception);
      }
      if (response.status == 402) {
      swalert("This response code is reserved for future use. Initial aim for creating this code was using it for digital payment systems however this is not used currently.");
      }
      if (response.status == 403) {
      swalert("Client does not have access rights to the content so server is rejecting to give proper response.");
      }
      if (response.status == 404) {
      swalert("Server can not find requested resource. This response code probably is most famous one due to its frequency to occur in web.");
      }
      if (response.status == 405) {
      swalert("The request method is known by the server but has been disabled and cannot be used. The two mandatory methods, GET and HEAD, must never be disabled and should not return this error code.");
      }
      if (response.status == 406) {
      swalert("This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content following the criteria given by the user agent.");
      }
      if (response.status == 407) {
      swalert("This is similar to 401 but authentication is needed to be done by a proxy.");
      }
      if (response.status == 408) {
      swalert("The server would like to shut down this unused connection");
      }
      if (response.status == 409) {
      swalert("This response would be sent when a request conflict with current state of server.");
      }
      if (response.status == 410) {
      swalert("This response would be sent when requested content has been deleted from server.");
      }
      if (response.status == 411) {
      swalert("Server rejected the request because the Content-Length header field is not defined and the server requires it.");
      }
      if (response.status == 412) {
      swalert("The client has indicated preconditions in its headers which the server does not meet.");
      }
      if (response.status == 500) {
      swalert("The server has encountered a situation it doesn't know how to handle");
      }
      if (response.status == 501) {
      swalert("The request method is not supported by the server and cannot be handled.");
      }
      if (response.status == 502) {
      swalert("The server, while working as a gateway to get a response needed to handle the request, got an invalid response.");
      }
      if (response.status == 503) {
      swalert("Common causes are a server that is down for maintenance or that is overloaded. ");
      }
      if (response.status == 504) {
      swalert("This error response is given when the server is acting as a gateway and cannot get a response in time.");
      }
      if (response.status == 505) {
      swalert("The HTTP version used in the request is not supported by the server.");
      }
      if (response.status == 506) {
      swalert("The server has an internal configuration error: transparent content negotiation for the request results in a circular reference.");
      }
      if (response.status == 507) {
      swalert("The server has an internal configuration error");
      }
      if (response.status == 511) {
      swalert("lient needs to authenticate to gain network access.");
      }


            $timeout(function() {
              $rootScope.UserAjaxFailed = false;
            }, 3000);
          }).finally(function() {
          });
      };
    });











})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:homeService
	* @description
	* # homeService
	* Service of the app
	*/

	angular.module('angular-app')
	.service('CommonService',function($http, UserAjax){
			
  		
				
		});		
})();


(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.directive:navbarDirective
	* @description
	* # navbarDirective
	* Directive of the app
	*/

	angular
		.module('angular-app')
		.directive('navBar', navBar);

	function navBar() {

		var directive = {
			link: link,
			restrict: 'EA',
			scope: {
				menus: '=',
				brand: '='
			},
			controller: control,
			templateUrl: 'app/modules/layouts/nav-bar/navbar-tpl.html'

		};

		return directive;

		function link(scope, element, attrs, $location) {
			// write your code here
			scope.defaults = {
				brand: '',
				menus: [],
				search: {
					show: false
				}
			}; // end defaults

		}

		function control($scope, $location) {

			$scope.isActive = function (path) {
				var currentPath = $location.path().split('/')[1];
				if (currentPath.indexOf('?') !== -1) {
					currentPath = currentPath.split('?')[0];
				}
				return currentPath === path.split('/')[1];
			};
		}

	}

})();
