const express = require('express')
const utility = require('utility')
const Router = express.Router()
const Model = require('./model')
const User = Model.getModel('user')

Router.get('/list', function (req, res) {
  // 清除数据库
  //User.remove({}, function (e, d) { })
  User.find({}, function (err, docs) {
    if (err) return res.json({ code: 1, msg: '查询User数据出错' })
    return res.json(docs)
  })
})

Router.post('/login', function (req, res) {
  const { user, pwd } = req.body
  User.findOne({ user, pwd: md5Pwd(pwd) }, function (e, d) {
    if (!d) {
      return res.json({ code: 4, msg: '用户名或密码错误' })
    }
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
  return res.json({ code: 0, msg: 'ok' })
})

function md5Pwd(pwd) {
  const salt = '_wJPO;-dQ{D'
  return utility.md5(utility.md5(pwd + salt))
}

module.exports = Router