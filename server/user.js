const express = require('express')
const Router = express.Router()
const Model = require('./model')
const User = Model.getModel('user')

Router.get('/list', function (req, res) {
  User.find({}, function(err, docs) {
    if (err) return res.json({ code: 1, msg: '查询User数据出错' })
    return res.json(docs)
  })
})

Router.get('/info', function (req, res) {
  return res.json({ code: 0, msg: 'ok' })
})

module.exports = Router