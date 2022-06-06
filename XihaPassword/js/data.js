// 存放用户基本信息
var userInfo = {
	"email": "youremail@gmail.com",  // 填写您的邮箱，默认使用邮箱作为用户名输入
	"phone": "12345678901",   // 填写您的手机号
	"qq": "12345789",		// 填写您的QQ号
	"key": "xiha123"	// 填写您加密密码的KEY值
};

// 存放用户名的特殊例子，采用 "网站顶级域名":"用户名" 的形式填写
var userNames = {
	"baidu": "风神V",
	"xito": userInfo.phone,
	"weibo": userInfo.phone,
}

// 存放密码的特殊例子，采用 "网站顶级域名":"密码" 的形式填写
var userPassword = {
	"baidu": "thisIsBaiduPassword",
	"weibo": "thisIsWeiboPassword"
}
