import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter, Link} from 'react-router-dom'
import {Layout, Menu, Icon} from 'antd'
import 'antd/dist/antd.css'
import '../src/main.css'

const {Header, Content, Footer, Sider} = Layout

const App = () =>
    <BrowserRouter>
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
                    <span>Receipt Lists</span>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Link to={'/dash'}>
                            <Icon type="dashboard"/>
                            <span>Dashboard</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to={'/list'}>
                            <Icon type="bars"/>
                            <span>Lists</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to={'/receipt'}>
                        <Icon type="file"/>
                        <span>Receipts</span>
                        </Link>
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
                          style={{lineHeight: '64px'}}>
                        <Menu.Item>
                            <Icon type="file-add"/>
                            <span>New Receipt</span>
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{margin: '24px 16px 0'}}>
                    <div style={{padding: 24, background: '#fff', minHeight: 360}}>
                        <Route path="/list" render={() => (
                            <h1>TEST</h1>
                        )}/>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    Reciept Lists by Wesley Klop &amp; Sergi Philipsen
                </Footer>
            </Layout>
        </Layout>
    </BrowserRouter>

render(<App/>, document.querySelector('#target'))
