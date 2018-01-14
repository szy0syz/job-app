const express = require('express')
const Router = express.Router()

Router.get('/info', function (req, res) {
  return res.json({code:1, msg: 'ok'})
})

module.exports = Router