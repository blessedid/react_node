import express from 'express';
import path from 'path';
import bobyParser from 'body-parser';
import * as db from './utils/DataBaseUtil';

const app = express();
const createError = require('http-errors');
app.use( bobyParser.json() );
app.use(express.static(path.join(__dirname, '../public')));


db.setUpConnection();

app.get('/',  (req, res) =>
  res.sendfile('public/index.html')
);

app.get('/books',  (req, res) =>
  db.getBooks().then( data => res.send(data) )
);

app.post('/books',  (req, res) =>
  db.addBooks(req.body).then( data => res.send(data) )
);

app.delete('/books/:id',  (req, res) =>
  db.deleteBooks(req.params.id).then( data => res.send(data) )
);

app.use((req, res, next) =>
  next(createError(404))
);

app.listen(8888, () => 
  console.log('Приложение запущено. Для просмотра откройте  localhost:8888')
);