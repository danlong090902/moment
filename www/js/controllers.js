angular.module('starter.controllers', [])

.controller('MommentsCtrl', function($scope, MonmmentsService) {
	// 本controller 变量定义
	// var commentClick = false;

	//scope变量定义
	$scope.hasNew = []; //是否有新消息
	$scope.userName = '张小六'; //登录的用户
	// $scope.viewAllTextHead = '查看全部';
	// $scope.viewAllTextEnd = '条评论';
	// $scope.hasFavour = false;

	//从MonmmentsService中获取数据;
	$scope.data = MonmmentsService.all();

	// 函数定义区
	//点赞函数
	$scope.onPraiseClick = function() {
			// console.log(this.value.favourIco);
			// $scope.hasFavour = !$scope.hasFavour;
			if (this.value.favourIco == 'ion-ios-heart-outline') {
				this.value.favour++;
				this.value.favourIco = 'ion-ios-heart favourIco';
				$scope.hasNew.push(1);
			} else if (this.value.favourIco == 'ion-ios-heart favourIco') {
				this.value.favour--;
				this.value.favourIco = 'ion-ios-heart-outline';
				$scope.hasNew.pop();
			}
		}
		//点击展开评论列表函数
	$scope.onCommentShowClick = function(len) {
		// console.log(len);
		// console.log(this);
		if (this.value.comShowNum!=this.value.comments.length) {
			this.value.comShowNum = len;
		} else {
			this.value.comShowNum = 3;
		}
	};
})
