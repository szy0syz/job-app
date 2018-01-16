const express = require('express')
const utility = require('utility')
const Router = express.Router()
const Model = require('./model')
const User = Model.getModel('user')
const _filter = { 'pwd': 0, '__v': 0 }

Router.get('/list', function (req, res) {
  // 清除数据库
  //User.remove({}, function (e, d) { })
  User.find({}, function (err, docs) {
    if (err) return res.json({ code: 1, msg: '查询User数据出错' })
    return res.json(docs)
  })
})
// 6-12 09:40 ....
Router.post('/login', function (req, res) {
  const { user, pwd } = req.body
  // mongoose 第一个是查询条件，第二个是显示条件，第三个才是回调函数,有漏洞
  User.findOne({ user, pwd: md5Pwd(pwd) }, _filter, function (e, d) {
    if (!d) {
      return res.json({ code: 4, msg: '用户名或密码错误' })
    }
    res.cookie('userid', d._id)
    return res.json({ code: 0, data: d, msg: '登录成功' })
  })
})

Router.post('/register', function (req, res) {
  const { user, pwd, type } = req.body
  User.findOne({ user: user }, function (err, doc) {
    if (doc) {
      return res.json({ code: 2, msg: '用户名重复' })
    }
    User.create({ user, pwd: md5Pwd(pwd), type }, function (err, doc) {
      if (err) {
        return res.json({ code: 3, msg: '数据库连接失败' })
      }
      // 写cookie
      return res.json({ code: 0, msg: '注册成功' })
    })
  })
})

Router.get('/info', function (req, res) {
  const { userid } = req.cookies
  if (!userid) {
    return res.json({ code: 1, msg: '没有登录过' })
  }
  User.findOne({ _id: userid }, _filter, function (err, doc) {
    if (err) { return res.json({ code: 5, msg: '数据库找不到你的数据' }) }
    if (doc) {
      return res.json({ code: 0, data: doc })
    }
    return res.json({ code: 5, msg: '数据库找不到你的数据' })
  })
  // return res.json({ code: 0, msg: 'ok' })
})

function md5Pwd(pwd) {
  const salt = '_wJPO;-dQ{D'
  return utility.md5(utility.md5(pwd + salt))
}

module.exports = Router