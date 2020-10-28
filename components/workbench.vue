<template>
	<div class="workBench">
		<div class="workContainer">
			<div class="title">工作台内容</div>
			<div class="workContent">
				<div v-for="(item,index) in workBenchData" :key="index" class="workItem" @click="toDetailPage(item.path)">
					<!-- <image src="/static/msg.png" mode="" class="workImg"></image> -->
					<text class="yticon" :style="[{
							color: item.iconColor,
						}]" :class="item.icon"></text>
					<p class="itemTitle">{{item.title}}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	export default {
		data() {
			return {
				workBenchData: [{
					icon: "icon-gonggao",
					iconColor: "	#FFA500",
					title: "公告",
					path: "/pages/page-one/one"
				}, {
					icon: "icon-kaoqintongji",
					iconColor: "	#1E90FF",
					title: "考勤",
					path: "/pages/page-two/two"
				}, {
					icon: "icon-paibandaka",
					iconColor: "#0000FF",
					title: "打卡",
					path: "/pages/page-three/three"
				}, {
					icon: "icon-zhiyeguihua",
					iconColor: "	#FF6347",
					title: "工作规划",
					path: "/pages/page-four/four"
				}, {
					icon: "icon-jindu",
					iconColor: "	#32CD32",
					title: "任务进度",
					path: "/pages/page-five/five"
				}, ]
			}
		},
		methods:{
			toDetailPage(path){
				uni.navigateTo({
				    url: path
				});
			}
		}
	}
</script>
<style lang='scss' scoped>
	.workBench {
		background: #ffffff;
		margin: 15px 11px 0 11px;
		border-radius: 5px;

		.workContainer {
			.title {
				padding: 20px 0 0 20px;
			}

			.workContent {
				display: flex;
				flex-wrap: wrap;
				justify-content: left;
				margin-top: 10px;

				.workItem {
					/* width: auto;
					height: auto; */
					width: 33%;
					/* height: auto; */
					/* height: 110px; */
					/* border: 1px solid #e6e6e6;
					border-left: none;
					border-bottom: none; */
					padding: 13px;
					text-align: center;
					vertical-align: middle;
					box-sizing: border-box;

					.yticon {
						/* width: 60px;
						height: 60px; */
						font-size: 30px;

					}

					.itemTitle {
						margin-top: 10px;
					}

					/* 	img{
				width: 100%;
			} */
				}

			}
		}
	}
</style>
