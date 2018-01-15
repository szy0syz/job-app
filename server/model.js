const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/job-app'
mongoose.connect(DB_URL, { // 加了options还warning
  socketTimeoutMS: 0,
  keepAlive: true,
  reconnectTries: 30
})

mongoose.connection.on('connected', function () {
  console.log('mongodb connect success')
})
mongoose.connection.on('error', function (e) {
  console.log('mongodb connect error', e)
})

const models = {
  user: {
    user: { type: String, require: true },
    pwd: { type: String, require: true },
    type: { type: String, require: true },
    // 头像
    avatar: { type: String },
    // 个人或职业简介
    desc: { type: String },
    // 职位名
    title: { type: String },
    // 如果是boss，还有两个字段
    company: { type: String },
    money: { type: String }
  },
  chat: {
  }
}

for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
  getModel: function (name) {
    return mongoose.model(name)
  }
}

// const User = mongoose.model('user', new mongoose.Schema({
//   name: { type: String, require: true },
//   age: { type: String, require: true }
// }))

// User.create({
//   name: '王五',
//   age: '18'
// }, function (err, doc) {
//   if (err) {
//     console.log('添加数据失败')
//     return
//   };
//   console.log('添加数据成功')
// })