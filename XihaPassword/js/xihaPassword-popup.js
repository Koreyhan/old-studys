window.onload = function(){
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
		// 获取网站名称(域名)
		var webName = getDomain(tabs[0].url);
		// 获取用户名、密码等相关信息
		var msg = {
			"username": getName(webName),
			"password": getPassword(webName)
		}
		// 消息传递给 content script
		chrome.tabs.sendMessage(tabs[0].id, msg, function(response) {  
			document.getElementById("meg").innerHTML = response;
		});
	}); 
}

// 根据当前url (tabs[0].url) 计算网站顶级域名
function getDomain(url){
	var pattern =  /\.\w*\./i;
	var urlDot = url.match(pattern) + "";  // 包含前后“.”的url
	return urlDot.slice(1,-1);
}

// 根据当前域名查询相应的用户名
// 先检索userNames中有无特殊用户名，如果无，统一返回用户邮箱作为用户名
function getName(domain){
	if(domain in userNames)
    return userNames[domain];
	else 
		return userInfo.email;   // 设置常用登录的用户名使用方案，默认为使用邮箱作为常用登录名
}

// 根据当前域名查询密码
// 先检索userNames中有无特殊密码，如果无，根据该网站域名计算出对应密码
function getPassword(domain){
	if(domain in userPassword)
		return userPassword[domain];
	else 
		return calculatePwd(domain);
}

// 根据当前域名计算密码
// 加密机制待完善，可以做出多种加密机制供用户选择使用
function calculatePwd(domain){
	return userInfo.key + domain;
}
