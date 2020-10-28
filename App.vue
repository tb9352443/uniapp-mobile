<script>
	/**
	 * vuex管理登陆状态，具体可以参考官方登陆模板示例
	 */
	import {
		mapMutations
	} from 'vuex';
	export default {
		methods: {
			...mapMutations(['login'])
		},
		onLaunch: function() {
			let userInfo = uni.getStorageSync('userInfo') || '';
			if(userInfo.id){
				//更新登陆状态
				uni.getStorage({
					key: 'userInfo',
					success: (res) => {
						this.login(res.data);
					}
				});
			}
			
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
	}
</script>

<style lang='scss'>
	/*
		全局公共样式和字体图标
	*/
	@font-face {
		font-family: yticon;
		font-weight: normal;
		font-style: normal;
		src: url('https://at.alicdn.com/t/font_2146033_c1rzlbt8mz.ttf') format('truetype');
	}

	.yticon {
		font-family: "yticon" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	
	.icon-zhiyeguihua:before {
	  content: "\e624";
	}
	
	.icon-jindu:before {
	  content: "\e606";
	}
	
	.icon-paibandaka:before {
	  content: "\e650";
	}
	
	.icon-gonggao:before {
	  content: "\e648";
	}
	
	.icon-kaoqintongji:before {
	  content: "\e6ac";
	}
	
	.icon-tubiao_xiaoxiduoyang:before {
	  content: "\e694";
	}
	
	.icon-tubiaoji_yunfuwu-24:before {
	  content: "\e696";
	}
	
	.icon-anzhuangzijian:before {
	  content: "\e61b";
	}
	
	.icon-kaifazhe:before {
	  content: "\e61c";
	}
	
	.icon-42wangzhanfuwu:before {
	  content: "\e634";
	}
	
	.icon-xiangshang:before {
	  content: "\e65a";
	}
	
	.icon-xiangyou:before {
	  content: "\e65b";
	}
	
	.icon-xiangzuo:before {
	  content: "\e85e";
	}
	
	.icon-xiangxia:before {
	  content: "\e626";
	}
	
	.icon-heads:before {
	  content: "\e602";
	}
	
	.icon-My:before {
	  content: "\e610";
	}
	
	.icon-password2:before {
	  content: "\e65d";
	}
	
	.icon-password:before {
	  content: "\e600";
	}
	
	.icon-icon_shezhi:before {
	  content: "\eb8d";
	}
	
	.icon-saoyisao:before {
	  content: "\e67d";
	}
	
	.icon-jiangli:before {
	  content: "\e60c";
	}
	
	.icon-dongtai:before {
	  content: "\e64f";
	}
	
	.icon-buoumaotubiao14:before {
	  content: "\e60d";
	}
	
	.icon-drxx85:before {
	  content: "\e6f2";
	}
	
	.icon-shoucang:before {
	  content: "\e612";
	}
	
	.icon-shoucang1:before {
	  content: "\e65e";
	}
	
	.icon-renwugenzong:before {
	  content: "\e64a";
	}
	
	.icon-gongzuotai:before {
	  content: "\e70a";
	}
	
	.icon-icon-test:before {
	  content: "\e6b3";
	}
	









	view,
	scroll-view,
	swiper,
	swiper-item,
	cover-view,
	cover-image,
	icon,
	text,
	rich-text,
	progress,
	button,
	checkbox,
	form,
	input,
	label,
	radio,
	slider,
	switch,
	textarea,
	navigator,
	audio,
	camera,
	image,
	video {
		box-sizing: border-box;
	}
	/* 骨架屏替代方案 */
	.Skeleton {
		background: #f3f3f3;
		padding: 20upx 0;
		border-radius: 8upx;
	}

	/* 图片载入替代方案 */
	.image-wrapper {
		font-size: 0;
		background: #f3f3f3;
		border-radius: 4px;

		image {
			width: 100%;
			height: 100%;
			transition: .6s;
			opacity: 0;

			&.loaded {
				opacity: 1;
			}
		}
	}

	.clamp {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		display: block;
	}

	.common-hover {
		background: #f5f5f5;
	}

	/*边框*/
	.b-b:after,
	.b-t:after {
		position: absolute;
		z-index: 3;
		left: 0;
		right: 0;
		height: 0;
		content: '';
		transform: scaleY(.5);
		border-bottom: 1px solid $border-color-base;
	}

	.b-b:after {
		bottom: 0;
	}

	.b-t:after {
		top: 0;
	}

	/* button样式改写 */
	uni-button,
	button {
		height: 80upx;
		line-height: 80upx;
		font-size: $font-lg + 2upx;
		font-weight: normal;

		&.no-border:before,
		&.no-border:after {
			border: 0;
		}
	}

	uni-button[type=default],
	button[type=default] {
		color: $font-color-dark;
	}

	/* input 样式 */
	.input-placeholder {
		color: #999999;
	}

	.placeholder {
		color: #999999;
	}
	uni-page-wrapper {
	    background: #F2F2F2;
	    /* padding-top: 20px; */
	}
</style>
