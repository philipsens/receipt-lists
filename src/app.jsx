import React from 'react'
import {render} from 'react-dom'
import 'antd/dist/antd.css'
import '../src/main.css'
import {Layout, Menu, Icon} from 'antd';

const {Header, Content, Footer, Sider} = Layout;

const App = () =>
    <Layout>
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onCollapse={(collapsed, type) => {
                console.log(collapsed, type);
            }}
        >
            <div className="logo">
                <Icon type="bars"/>
                <span>Reciept Lists</span>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Icon type="dashboard"/>
                    <span>Dashboard</span>
                </Menu.Item>
                <Menu.Item>
                    <Icon type="bars"/>
                    <span>Lists</span>
                </Menu.Item>
                <Menu.Item>
                    <Icon type="file"/>
                    <span>Reciepts</span>
                </Menu.Item>
                <Menu.Item>
                    <Icon type="setting"/>
                    <span>Settings</span>
                </Menu.Item>
            </Menu>
        </Sider>
        <Layout>
            <Header style={{background: '#fff', padding: 0}}>
                <Menu mode="horizontal"
                      defaultSelectedKeys={['2']}
                      style={{ lineHeight: '64px' }}>
                    <Menu.Item>
                        <Icon type="file-add"/>
                        <span>New Reciept</span>
                    </Menu.Item>
                </Menu>
            </Header>
            <Content style={{margin: '24px 16px 0'}}>
                <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                    content
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>
                Reciept Lists by Wesley Klop &amp; Sergi Philipsen
            </Footer>
        </Layout>
    </Layout>

render(<App/>, document.querySelector('#target'))
