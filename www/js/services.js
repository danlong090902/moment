angular.module('starter.services', [])

.factory('MonmmentsService', function() {
	// Might use a resource here that returns a JSON array
	var data = [{
			name: '凌度',
			time: '2017-1-1 08:23',
			text: '滴滴出行,出行无忧',
			share: {
				img: 'img/portrait.jpg',
				text: '滴滴出行,从此出行再无忧'
			},
			picture: false,
			favour: 9,
			favourIco:'ion-ios-heart-outline',
			comShowNum:3,
			comments: [{
				sender: '秋香',
				receiver: '凌度',
				content: '赞'
			}, {
				sender: '我爱保时捷',
				receiver: '凌度',
				content: '滴滴,让出行更美丽!'
			}]

		}, {
			name: '张小六',
			time: '2017-1-1 08:23',
			text: false,
			share: {
				img: 'img/portrait.jpg',
				text: '滴滴,注册司机接单拿奖励,随时随地可接单,赢取高额奖励,轻松赚外快!'
			},
			picture: false,
			favour: 125,
			favourIco:'ion-ios-heart-outline',
			comShowNum:3,
			comments: [{
				sender: '星星点灯',
				receiver: '张小六',
				content: '每天上下班顺两单,一周下来节碳量相当于两棵树,节能环保减少堵车!'
			}, {
				sender: '至尊宝',
				receiver: '张小六',
				content: '了解从未有过的领域,比赚钱更让我心动的是收获。'
			}, {
				sender: '野马',
				receiver: '至尊宝',
				content: '有内涵~'
			}, {
				sender: '野马',
				receiver: '至尊宝',
				content: '有内涵~'
			}, {
				sender: '野马',
				receiver: '至尊宝',
				content: '有内涵~'
			}, {
				sender: '野马',
				receiver: '至尊宝',
				content: '有内涵~'
			}, {
				sender: '野马',
				receiver: '至尊宝',
				content: '有内涵~'
			}, {
				sender: '野马',
				receiver: '至尊宝',
				content: '有内涵~'
			}, {
				sender: '野马',
				receiver: '至尊宝',
				content: '有内涵~'
			}, {
				sender: '野马',
				receiver: '至尊宝',
				content: '有内涵~'
			}, {
				sender: '野马',
				receiver: '至尊宝',
				content: '有内涵~'
			}, {
				sender: '野马',
				receiver: '至尊宝',
				content: '有内涵~'
			}, {
				sender: '野马',
				receiver: '至尊宝',
				content: '有内涵~'
			}, {
				sender: '野马',
				receiver: '至尊宝',
				content: '有内涵~'
			}]

		}, {
			name: '甲壳虫',
			time: '2017-1-1 08:23',
			text: '2017年1月，心之向往，我的西藏之行，历时16天，川进青出。',
			share: false,
			picture: ["img/pic1.jpg"],
			favour: 124,
			favourIco:'ion-ios-heart-outline',
			comShowNum:3,
			comments: [{
				sender: '星星点灯',
				receiver: '张小六',
				content: '每天上下班顺两单,一周下来节碳量相当于两棵树,节能环保减少堵车!'
			}, {
				sender: '至尊宝',
				receiver: '张小六',
				content: '了解从未有过的领域,比赚钱更让我心动的是收获。'
			}, {
				sender: '甲壳虫',
				receiver: '至尊宝',
				content: '有内涵~'
			}, {
				sender: '甲壳虫',
				receiver: '至尊宝',
				content: '绿色出行~'
			}]

		}, {
			name: '甲壳虫',
			time: '2017-1-1 08:23',
			text: '2017年1月，心之向往，我的西藏之行，历时16天，川进青出。',
			share: false,
			picture: ["img/pic1.jpg", "img/pic2.jpg", "img/pic3.jpg", "img/pic4.jpg"],
			favour: 125,
			favourIco:'ion-ios-heart-outline',
			comShowNum:3,
			comments: [{
				sender: '星星点灯',
				receiver: '张小六',
				content: '每天上下班顺两单,一周下来节碳量相当于两棵树,节能环保减少堵车!'
			}, {
				sender: '至尊宝',
				receiver: '张小六',
				content: '了解从未有过的领域,比赚钱更让我心动的是收获。'
			}, {
				sender: '甲壳虫',
				receiver: '至尊宝',
				content: '有内涵~'
			}, {
				sender: '甲壳虫',
				receiver: '至尊宝',
				content: '绿色出行~'
			}]

		}, {
			name: '甲壳虫',
			time: '2017-1-1 08:23',
			text: '2017年1月，心之向往，我的西藏之行，历时16天，川进青出。',
			share: false,
			picture: ["img/pic1.jpg", "img/pic2.jpg", "img/pic3.jpg", "img/pic4.jpg", "img/pic5.jpg", "img/pic6.jpg", "img/pic7.jpg"],
			favour: 125,
			favourIco:'ion-ios-heart-outline',
			comShowNum:3,
			comments: false
		}];
	return {
		all: function() {
			return data;
		}
	};
});
