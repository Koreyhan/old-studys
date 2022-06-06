// console.log("xihaPassword worked");
chrome.extension.onMessage.addListener(function(message,sender,sendResponse){

	// 从网站获取密码输入框和用户名输入框
	var $inputPwd = $("input[type='password']");
	var $inputUsers = getInputUser();

	// 存储运行结果的返回消息
	var response = "";

	// 根据获取到的输入框和用户信息进行填充，并返回消息
	if($inputPwd.length){
		$inputPwd.val(message.password);
		if($inputUsers.length){
			for(var i=0,num=$inputUsers.length;i<num;i++){
				$inputUsers[i].val(message.username);
			}
			response = "密码、用户名已经成功填写!";
			$inputPwd.trigger("click");
		}else{
			response = "密码已经成功填写!";
		}
	}else{
		response = "没有找到密码填写框！";
	}
	sendResponse(response);
});


// 查找匹配填写用户名、姓名、邮箱的输入框
function getInputUser(){
	var $inputText = $("input[type='email'],input[type='text']");
	var $inputUsers = [];   // 存储 获取到的可能是用户名输入相关的表单
	var reg = /名|邮箱|name|email|user|login/gi;
	$inputText.each(function(){
		if(reg.test($(this).attr('placeholder')) || reg.test($(this).attr('name'))){
			$inputUsers.push($(this));
		}
	})
	return $inputUsers;
}