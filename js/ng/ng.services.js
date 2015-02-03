'use strict';
angular.module('app.services', [])
	.factory('userService', ['$http',
		function($http) {
			var getUserList = function() {
				var promise = $http({
					url: '/rest/admin/user/list',
					method: 'get'
				}).then(function(response) {
					// The then function here is an opportunity to modify the response
					console.log(response);
					// The return value gets picked up by the then in the controller.
					return response.data.item;
				});
				// Return the promise to the controller
				return promise;
			};
			// var updateUser = function(userObj) {
			// 	var promise = $http({
			// 		url: '/rest/User/Update',
			// 		method: 'post',
			// 		data: userObj
			// 	}).then(function(response) {
			// 		// The then function here is an opportunity to modify the response
			// 		console.log(response);
			// 		// The return value gets picked up by the then in the controller.
			// 		return response.data.item;
			// 	});
			// 	// Return the promise to the controller
			// 	return promise;

			// };

			var getUserProfile = function() {
				var promise = $http({
					url: '/rest/admin/user/profile',
					method: 'get'
				}).then(function(response) {
					// The then function here is an opportunity to modify the response
					console.log(response);
					// The return value gets picked up by the then in the controller.
					return response.data.item;
				});
				// Return the promise to the controller
				return promise;
			};

			var logout = function() {
				var promise = $http({
					url: '/rest/admin/logout',
					method: 'post'
				}).then(function(response) {
					// The then function here is an opportunity to modify the response
					console.log(response);
					// The return value gets picked up by the then in the controller.
					return response.data.item;
				});
				// Return the promise to the controller
				return promise;

			};

			return {
				getUserList: getUserList,
				logout: logout,
				getUserProfile:getUserProfile
					// updateUser: updateUser
			};
		}
	]);