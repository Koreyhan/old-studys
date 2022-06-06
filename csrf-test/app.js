const path = require('path')
const express = require('express')
const ejs = require('ejs')
const cookieParser = require('cookie-parser')

let app = express()

// engine
app.engine('html', ejs.renderFile)
app.set('view engine', 'html')

// static
app.use('/public', express.static(path.join(__dirname, 'public')))

// common middleware
app.use(cookieParser())

// routes
app.get('/index', function (req, res) {
  console.log('/index')
  res.render('index')
})
app.get('/ui', function (req, res) {
  res.render('ui')
})

// api
app.get('/api/test', function (req, res) {
  res.cookie('token', 'xixihaha', { expires: new Date(Date.now() + 1000 * 60 * 60 * 24) })
  res.cookie('tokenStrict', 'xixihaha', { expires: new Date(Date.now() + 1000 * 60 * 60 * 24), sameSite: 'Strict' })
  res.cookie('tokenLax', 'xixihaha', { expires: new Date(Date.now() + 1000 * 60 * 60 * 24), sameSite: 'Lax' })
  console.log('/api/test-get')
  res.send('test get, set cookie')
})
app.post('/api/test', function (req, res) {
  res.cookie('token', 'xixihaha', { expires: new Date(Date.now() + 1000 * 60 * 60 * 24) })
  res.cookie('tokenStrict', 'xixihaha', { expires: new Date(Date.now() + 1000 * 60 * 60 * 24), sameSite: 'Strict' })
  res.cookie('tokenLax', 'xixihaha', { expires: new Date(Date.now() + 1000 * 60 * 60 * 24), sameSite: 'Lax' })
  console.log('/api/test-post')
  res.send('test post, set cookie')
})
app.post('/api/jsonp', function (req, res) {
  res.send(`window[decodeURIComponent("jQuery110201339527793686235_1568715138451")]({"msg":"\u53d6\u6d88\u5173\u6ce8\u6210\u529f","setTime":3,"code":"1"})`)
})

app.listen(3000, function () {
  console.log('测试地址: http://localhost:3000/index')
})