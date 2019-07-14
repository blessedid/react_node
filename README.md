# Тестовое приложение
## Инструкция
* Идем в файл `server/utils/DataBaseUtil.js` и изменяем на свои параметры для соединения с MongoDB
```js
export function setUpConnection() {
    mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
}
```
> К сожалению базу придется заполнять в ручную
* В папке `public` уже лежит вполне рабочий проект.
```sh
$ npm run start
$ npm run build
```
* Запускаем NodeJS сервер командой
```sh
$ start_server
```
## Технологии
- JavaScript
- [NodeJS](https://nodejs.org) - evented I/O for the backend
- [MongoDB](https://www.mongodb.com) - the most popular database for modern apps
## Frontend
- [ReactJS](https://reactjs.org) - a JavaScript library for building user interfaces
- [Ant Design](https://ant.design) - the world's second most popular React UI framework
- [axios](https://github.com/axios/axios) - promise based HTTP client for the browser and NodeJS
- [React Router](https://github.com/ReactTraining/react-router) - declarative routing for React
## Backend
- [Express](http://expressjs.com) - fast node.js network app framework [@tjholowaychuk](http://twitter.com/tjholowaychuk)
- [Mongoose](https://mongoosejs.com) - elegant mongodb object modeling for node.js
## Dev
- [Webpack](https://webpack.js.org) - JavaScript module bundler
- [Babel](https://babeljs.io) - the compiler for next generation JavaScript
## Эпилог
* Ни о какаой либо безопсности проекта не стоит даже заикаться
* Некоторые моменты хотелось бы исправить и сделать более лаконичными
* В планах добавить компонент для добавления книг и авторов