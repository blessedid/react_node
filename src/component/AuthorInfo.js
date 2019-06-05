import React, { Component } from "react";
import { Row, Col, Descriptions, Avatar } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import PropTypes from "prop-types";

export class AuthorInfo extends Component {

    constructor(props){
        super(props);
        this.state = {
            author: [],
        }
    }

    // static propTypes = {
    //     match: PropTypes.object.isRequired,
    //     location: PropTypes.object.isRequired,
    //     history: PropTypes.object.isRequired
    // };

    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
      axios.get('http://localhost:8888/authors.get', {
        params: { id: this.props.match.params.id }
      })
        .then(res => {
          this.setState({ author: res.data });
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
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timezone: 'UTC'
        };
        
        return(
            <Row>
                <Col span={12} offset={6}>
                <Descriptions title={this.state.author.name}>
                    <Descriptions.Item label="Photo">
                        <Avatar shape="square" size={200} src={this.state.author.photo} />
                    </Descriptions.Item>
                    <Descriptions.Item label="Дата рождения">{ (new Date(this.state.author.date_birth)).toLocaleString("ru", options) }</Descriptions.Item>
                    <Descriptions.Item label="Дата смерти">{ (new Date(this.state.author.date_death)).toLocaleString("ru", options) }</Descriptions.Item>
                </Descriptions>
                </Col>
            </Row>
        );
    }
}