import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {Layout, Menu, Icon, Card, Row, Col} from 'antd'
import 'antd/dist/antd.css'
import '../src/main.css'

const {Header, Content, Footer, Sider} = Layout

const App = () => (
    <Layout>
        <Sidebar/>
        <Switch>
            <Route exact path="/receipt" component={ReceiptListPage}/>
            <Route path="/receipt/:id" render={({match}) => match.params.id}/>
            <Route component={Dashboard}/>
        </Switch>
    </Layout>
)

const Sidebar = () => (
    <Sider className="sidebar" breakpoint="sm" collapsedWidth="0">
        <div className="logo">
            <Icon type="bars"/>
            <span>Receipt Lists</span>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
                <Link to={'/'}>
                    <Icon type="dashboard"/>
                    <span>Dashboard</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to={'/list'}>
                    <Icon type="bars"/>
                    <span>All Lists</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to={'/receipt'}>
                    <Icon type="file"/>
                    <span>All Receipts</span>
                </Link>
            </Menu.Item>
            <Menu.Item key="4">
                <Link to={'/settings'}>
                    <Icon type="setting"/>
                    <span>Settings</span>
                </Link>
            </Menu.Item>
        </Menu>
    </Sider>
)

const ReceiptListPage = () => (
    <Layout>
        <Header className="header">
            <Menu className="menu" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item>
                    <Icon type="file-add"/>
                    <span>New Receipt</span>
                </Menu.Item>
            </Menu>
        </Header>
        <Content className="content">
            <Row gutter={16}>
                <Col xxl={6} xl={8} md={12} sm={24}>
                    <Receipt/>
                </Col>
                <Col xxl={6} xl={8} md={12} sm={24}>
                    <Receipt/>
                </Col>
                <Col xxl={6} xl={8} md={12} sm={24}>
                    <Receipt/>
                </Col>
                <Col xxl={6} xl={8} md={12} sm={24}>
                    <Receipt/>
                </Col>
                <Col xxl={6} xl={8} md={12} sm={24}>
                    <Receipt/>
                </Col>
                <Col xxl={6} xl={8} md={12} sm={24}>
                    <Receipt/>
                </Col>
            </Row>
        </Content>
        <Footer style={{textAlign: 'center'}}>
            Receipt Lists by Wesley Klop &amp; Sergi Philipsen
        </Footer>
    </Layout>
)

const Dashboard = () => (
    <Layout>
        <Header className="header">
        </Header>
        <Content className="content">
            <Row gutter={16}>
                <Col span={6}>
                    <Card title="Een widget ofzo">
                        Hier staat info
                    </Card>
                </Col>
            </Row>
        </Content>
    </Layout>
)

const Receipt = () => (
    <Card
        hoverable
        cover={<img alt="example" src="https://d85ecz8votkqa.cloudfront.net/support/help_center/Print_Payment_Receipt.JPG" />}
        className="receipt"
        title="Een bon">
        Info over de bon
    </Card>
)

render(
    <Router>
        <App/>
    </Router>
    , document.querySelector('#target'))
