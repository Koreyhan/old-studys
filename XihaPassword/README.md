# 嘻哈密码
一款Chrome游览器插件，帮助你便捷的管理和填写各种网站的登录名和密码。

### 原理说明
嘻哈密码可以根据当前访问网站的域名，通过你指定的算法（如 使用你定制的KEY值+网站域名，再整体反转），这样可以动态的为每个网站计算出一个独特的网站密码，不仅方便你的记忆，也提高了密码的安全性。目前，嘻哈密码支持一键填写，在登录或者注册时，只要点击一下插件，即可根据你的配置自动填写对应的密码和用户名。
### 使用说明
由于尚未完善出配置功能及未打包发布应用，请按如下操作使用
1. 下载XihaPassword文件并配置**js/data.js**中的用户信息，常用的登录邮箱、手机号以及加密算法中的KEY值，如果某个网站有特殊的用户名或密码方案，可以单独在**userNames**和**userPassword**中指定；
2. 在** js/xihaPassword-popup.js**中可以修改默认的用户名输入方案以及定制你自己的加密算法（function **calculatePwd**）；
3. 配置完成后使用Chrome游览器中的扩展程序菜单，打开开发者模式，点击** 加载已解压的扩展程序...**，找到已经配置好的嘻哈密码文件，导入进来即可使用了；
4. 在遇到填写用户名、密码等相关信息时，点击嘻哈密码扩展图标即可自动填写对应的表单。''
### 最后 
程序还在不断改进中，欢迎有想法的朋友发来issues提出宝贵意见~