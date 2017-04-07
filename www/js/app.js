// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
			cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			cordova.plugins.Keyboard.disableScroll(true);

		}
		if (window.StatusBar) {
			// org.apache.cordova.statusbar required
			StatusBar.styleDefault();
		}
	});
})

.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  //设置设备样式
  $ionicConfigProvider.platform.ios.tabs.style('standard');
  $ionicConfigProvider.platform.ios.tabs.position('bottom');
  $ionicConfigProvider.platform.android.tabs.style('standard');
  $ionicConfigProvider.platform.android.tabs.position('standard');


  //center:标题居中，left:标题居左，right:标题居右
  $ionicConfigProvider.navBar.alignTitle('center');
  // $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
  // $ionicConfigProvider.platform.android.navBar.alignTitle('center');

  //设置返回按钮属性
  $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
  $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

  //设置设备控件
  $ionicConfigProvider.platform.ios.views.transition('ios');
  $ionicConfigProvider.platform.android.views.transition('android');

	// Ionic uses AngularUI Router which uses the concept of states
	// Learn more here: https://github.com/angular-ui/ui-router
	// Set up the various states which the app can be in.
	// Each state's controller can be found in controllers.js
	$stateProvider
	.state('moments', {
		url: '/moments',
		controller:'MommentsCtrl',
		templateUrl: 'templates/moments.html'
	})

;

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/moments');

});
