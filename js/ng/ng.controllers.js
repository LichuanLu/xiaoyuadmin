angular.module('app.controllers', [])
	.factory('settings', ['$rootScope', function($rootScope) {
		// supported languages

		var settings = {
			languages: [{
				language: 'English',
				translation: 'English',
				langCode: 'en',
				flagCode: 'us'
			}, {
				language: 'Espanish',
				translation: 'Espanish',
				langCode: 'es',
				flagCode: 'es'
			}, {
				language: 'German',
				translation: 'Deutsch',
				langCode: 'de',
				flagCode: 'de'
			}, {
				language: 'Korean',
				translation: '한국의',
				langCode: 'ko',
				flagCode: 'kr'
			}, {
				language: 'French',
				translation: 'français',
				langCode: 'fr',
				flagCode: 'fr'
			}, {
				language: 'Portuguese',
				translation: 'português',
				langCode: 'pt',
				flagCode: 'br'
			}, {
				language: 'Russian',
				translation: 'русский',
				langCode: 'ru',
				flagCode: 'ru'
			}, {
				language: 'Chinese',
				translation: '中國的',
				langCode: 'zh',
				flagCode: 'cn'
			}],

		};

		return settings;

	}])

.controller('PageViewController', ['$scope', '$route', '$animate', 'userService',
	function($scope, $route, $animate, userService) {
		// controler of the dynamically loaded views, for DEMO purposes only.
		$scope.$on('$viewContentLoaded', function() {
			console.log($route);

			//add function to load different service depends on url
			// userService.getUserList().then(function(data) {
			// 	$scope.userList = data;
			// 	//share car list using service
			// 	// updateCarListService.setCarList($scope.carList);
			// });
		});
	}
])

.controller('SmartAppController', ['$scope', '$location','$http','userService', function($scope, $location,$http, userService) {
	// your main controller
	// var routeParams = $location.search();
	// console.log(routeParams);
	// $scope.uid = routeParams['uid'];
	// $scope.username = routeParams['uname'];
	// if(!$scope.uid){
	// 	console.log('error: not login');
	// 	var loginUrl = '/login.html';
	// 	window.location.replace(loginUrl);
	// }
	//后台判断是否登录，根据cookie的session
	// $http({
	// 	url: '/rest/user/profile',
	// 	method: 'get'
	// }).then(function(response) {
	// 	// The then function here is an opportunity to modify the response
	// 	console.log(response);
	// 	// The return value gets picked up by the then in the controller.
	// 	$scope.uid = response.data.item.id;
	// 	$scope.username = response.data.item.name;
	// });

	userService.getUserProfile().then(function(data) {
		 $scope.uid = data.id;
		$scope.username = data.name;
	});


}])
.controller('LangController', ['$scope', 'settings', 'localize', function($scope, settings, localize) {
	$scope.languages = settings.languages;
	$scope.currentLang = settings.currentLang;
	$scope.setLang = function(lang) {
		settings.currentLang = lang;
		$scope.currentLang = lang;
		localize.setLang(lang);
	}

	// set the default language
	$scope.setLang($scope.currentLang);

}])

;

angular.module('app.demoControllers', [])
	.controller('WidgetDemoCtrl', ['$scope', '$sce', function($scope, $sce) {
		$scope.title = 'SmartUI Widget';
		$scope.icon = 'fa fa-user';
		$scope.toolbars = [
			$sce.trustAsHtml('<div class="label label-success">\
				<i class="fa fa-arrow-up"></i> 2.35%\
			</div>'),
			$sce.trustAsHtml('<div class="btn-group" data-toggle="buttons">\
		        <label class="btn btn-default btn-xs active">\
		          <input type="radio" name="style-a1" id="style-a1"> <i class="fa fa-play"></i>\
		        </label>\
		        <label class="btn btn-default btn-xs">\
		          <input type="radio" name="style-a2" id="style-a2"> <i class="fa fa-pause"></i>\
		        </label>\
		        <label class="btn btn-default btn-xs">\
		          <input type="radio" name="style-a2" id="style-a3"> <i class="fa fa-stop"></i>\
		        </label>\
		    </div>')
		];

		$scope.content = $sce.trustAsHtml('\
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\
						quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\
						consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\
						cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\
						proident, sunt in culpa qui officia deserunt mollit anim id est laborum.');
	}])

.controller('ActivityDemoCtrl', ['$scope', function($scope) {
	var ctrl = this;
	ctrl.getDate = function() {
		return new Date().toUTCString();
	};

	$scope.refreshCallback = function(contentScope, done) {

		// use contentScope to get access with activityContent directive's Control Scope
		console.log(contentScope);

		// for example getting your very long data ...........
		setTimeout(function() {
			done();
		}, 3000);

		$scope.footerContent = ctrl.getDate();
	};

	$scope.items = [{
		title: 'Msgs',
		count: 14,
		src: 'ajax/notify/mail.html',
		onload: function(item) {
			console.log(item);
			alert('[Callback] Loading Messages ...');
		}
	}, {
		title: 'Notify',
		count: 3,
		src: 'ajax/notify/notifications.html'
	}, {
		title: 'Tasks',
		count: 4,
		src: 'ajax/notify/tasks.html',
		//active: true
	}];

	$scope.total = 0;
	angular.forEach($scope.items, function(item) {
		$scope.total += item.count;
	})

	$scope.footerContent = ctrl.getDate();

}]);