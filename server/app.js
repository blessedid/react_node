import express from 'express';
import path from 'path';
import bobyParser from 'body-parser';
import * as db from './utils/DataBaseUtil';

const app = express();
const createError = require('http-errors');
app.use( bobyParser.json() );
app.use(express.static(path.join(__dirname, '../public')));


db.setUpConnection();

app.get('/books.get',  (req, res) => {
  db.getBooks().then( data => res.send(data) )
});

app.post('/books.post',  (req, res) =>
  db.addBooks(req.body).then( data => res.send(data) )
);

app.delete('/books/:id',  (req, res) =>
  db.deleteBooks(req.params.id).then( data => res.send(data) )
);

app.get('/authors.get',  (req, res) => {
  if(req.query.id){
    db.getAuthorById(req.query.id).then( data => res.send(data) )
  }else{
    db.getAuthors().then( data => res.send(data) )
  }
});

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/../public/default.html'));
});

app.use((req, res, next) =>
  next(createError(404))
);

app.listen(8888, () => 
  console.log('Приложение запущено. Для просмотра откройте  localhost:8888')
);