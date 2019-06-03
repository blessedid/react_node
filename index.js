var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('привет');
});

app.listen(8888, function () {
  console.log('Приложение запущено. Для просмотра откройте  localhost:8888');
});