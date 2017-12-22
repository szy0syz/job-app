const express =require('express');

const app = express();

app.get('/', function (req, res) {
  res.end('<h1>Hello world</h1>')
})

app.get('/data', function (req,res) {
  res.json({name: 'Jerry Shi', date: '20171222'})
})

app.listen(9093, function () {
  console.log('Node app strat at port 9093');
})