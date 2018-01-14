const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/job'
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function () {
  console.log('mongodb connect success')
})
mongoose.connection.on('error', function (e) {
  console.log('mongodb connect error', e)
})

const User = mongoose.model('user', new mongoose.Schema({
  name: { type: String, require: true },
  age: { type: String, require: true }
}))

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