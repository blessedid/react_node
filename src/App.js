import React, { Component } from "react";
import { Router, Route } from 'react-router';
import { createBrowserHistory } from "history";
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css';
import { Tables } from './component/Tables';
import { AuthorInfo } from './component/AuthorInfo';

class App extends Component {
    render() {
        const { Header, Content, Footer } = Layout;
        const history = createBrowserHistory();

        return (
            <Router history={history}>
                <Layout className="layout">
                    <Header>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['1']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1">Books</Menu.Item>
                    </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        <Route exact strict path='/' component={Tables} />
                        <Route path='/author-:id' component={AuthorInfo} />
                    </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Created by <a href="http://vk.com/blessedid">Alexandr Petrov</a></Footer>
                </Layout>
            </Router>
        );
    }
}

export default App;