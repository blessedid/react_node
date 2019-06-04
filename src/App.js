import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css';
import {Tables} from './component/Tables';

class App extends Component {
    render() {
        const { Header, Content, Footer } = Layout;

        return (
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
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}><Tables/></div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Created by <a href="http://vk.com/blessedid">Alexandr Petrov</a></Footer>
            </Layout>
        );
    }
}

export default App;