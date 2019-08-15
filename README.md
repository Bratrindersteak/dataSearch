# data search

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


<!DOCTYPE html>
<html>
<head>
	<title>test</title>
	<meta charset="utf-8" />
	<style type="text/css">
		html, body, .container {
			height: 100%;
		}

		body, p {
			margin: 0;
		}

		input, button {
			outline: none;
			padding: 0;
			border: 0;
		}
	</style>
	<style type="text/css">
		.top-link {
			position: absolute;
			right: 0;
			margin-top: 20px;
			font-size: 0;
		}

		.top-link a {
			display: inline-block;
			height: 24px;
			line-height: 24px;
			margin: 0 10px;
			font-weight: 700;
			font-size: 13px;
			color: #333333;
		}

		.top-link a:last-child {
			text-decoration: none;
			padding: 0 4px;
		    background-color: #38f;
		    font-weight: normal;
		    color: #ffffff;
		}

		.main, .qrcode, footer {
			text-align: center;
		}

		.main {
			position: relative;
			top: 170px;
		}

		.logo {
			font-size: 0;
		}

		.search {
			margin-top: 22px;
		}

		.search input[type=text] {
			width: 540px;
			height: 36px;
			line-height: 36px;
			padding-left: 10px;
			vertical-align: 1px;
			border: 1px solid #b6b6b6;
			border-right: 0;
			box-sizing: border-box;
		}

		.search input[type=submit] {
			width: 100px;
			line-height: 36px;
			background-color: #3385ff;
			font-size: 15px;
			color: #ffffff;
			cursor: pointer;
		}

		.qrcode {
			width: 100%;
			position: absolute;
			bottom: 132px;
		}

		.qrcode .img {
			display: inline-block;
			padding: 5px;
			border: 1px solid #f3f3f3;
			font-size: 0;
		}

		.qrcode .title {
			color: #333333;
    		font-size: 16px;
    		line-height: 32px;
    		letter-spacing: 3px;
		}

		.qrcode .sub-title {
			color: #999999;
    		font-size: 14px;
    		line-height: 14px;
    		font-weight: 300;
		}

		footer {
			width: 100%;
			position: absolute;
			bottom: 51px;
		}

		.footer {
			display: inline-block;
			font-size: 12px;
		}

		.footer nav {
			line-height: 22px;
		}

		.footer a {
			margin-left: 25px;
			color: #999999;
		}

		.footer a:first-child {
			margin-left: 0;
		}

		.footer p {
			color: #999999;
		}
	</style>
</head>
<body>
	<div class="container">
		<nav class="top-link">
			<a href="">新闻</a>
			<a href="">hao123</a>
			<a href="">地图</a>
			<a href="">视频</a>
			<a href="">贴吧</a>
			<a href="">学术</a>
			<a href="">登录</a>
			<a href="">设置</a>
			<a href="">更多产品</a>
		</nav>
		<div class="main">
			<div class="logo"><img width="270" src="bd_logo1.png" /></div>
			<div class="search"><input type="text" value="" /><input type="submit" value="百度一下" /></div>
		</div>
		<div class="qrcode">
			<div class="img"><img width="106" src="qrcode.png" /></div>
			<p class="title">下载百度APP</p>
			<p class="sub-title">有事搜一搜  没事看一看</p>
		</div>
		<footer>
			<div class="footer">
				<nav>
				<a href="">把百度设为主页</a>
				<a href="">关于百度</a>
				<a href="">About  Baidu</a>
				<a href="">百度推广</a>
			</nav>
			<p>©2019 Baidu 使用百度前必读 意见反馈 京ICP证030173号京公网安备11000002000001号</p>
			</div>
		</footer>
	</div>
</body>
</html>
