'use strict';

angular.module('smartApp')
	.factory('httpErrorAction', ['$rootScope','$timeout',

		function($rootScope,$timeout) {
			

			var baseErrorHandler = function() {
				alert('接口调用错误');
			};

			var messageErrorHandler = function(response) {	
				var resMes = response.data.errorDescription;
				var resCode = response.data.errorCode;
				alert('调用错误：'+resMes);
				if(resCode == 2){
					var loginUrl = '/login.html';
					window.location.replace(loginUrl);
				}
			};

			return {
				baseErrorHandler: baseErrorHandler,
				messageErrorHandler: messageErrorHandler

			};
		}
	]);