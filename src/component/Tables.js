import React, { Component } from "react";
import { Table } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';

export class Tables extends Component {

    constructor(props){
        super(props);
        this.state = {
            books: [],
        }
    }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
      axios.get('http://localhost:8888/books.get')
        .then(res => {
          this.setState({ books: res.data });
      });
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    tick() {
      this.setState({
        date: new Date()
      });
    }
    
    render() {
        const columns = [
            {
              title: 'Наименование книги',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: 'Авторы',
              key: 'authors',
              dataIndex: 'authors',
            render: authors => authors.map(authors => {
              //console.log("<a href='/author/" + authors._id+"'>"+authors.name+"</a>" );
                return <a href={'/author-' + authors._id}>{authors.name} </a>
              }),
            },
            {
              title: 'Дата',
              dataIndex: 'date',
              key: 'date',
              render: date => (new Date(date)).toDateString(),
            },
          ];

        return(
            <Table columns={columns} dataSource={this.state.books} rowKey="_id" />
        );
    }
}