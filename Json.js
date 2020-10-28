/* 用户 */
const userInfo = {
	status: 1,
	data: {
		id: 1,
		mobile: 18888888888,
		nickname: 'Leo yo',
		portrait: 'http://img.61ef.cn/news/201409/28/2014092805595807.jpg'
	},
	msg: '提示'
}
/* 首页轮播图 */
const carouselList = [{
		src: "/static/temp/banner3.jpg",
		background: "rgb(8,67,251)",
	},
	{
		src: "/static/temp/banner2.jpg",
		background: "rgb(8,67,251)",
	},
	{
		src: "/static/temp/banner4.jpg",
		background: "rgb(8,67,251)",
	}
]


export default {
	carouselList,
	userInfo,
}
