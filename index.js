var createError = require('http-errors');
var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.send('привет');
});

app.use(function(req, res, next) {
  next(createError(404, 'Not Found', { expose: true }));
});

app.listen(8888, function () {
  console.log('Приложение запущено. Для просмотра откройте  localhost:8888');
});