import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {Layout, Menu, Icon, Card, Row, Col} from 'antd'
import 'antd/dist/antd.css'
import './main.css'
import Dashboard from "./components/pages/DashboardPage";
import Sidebar from "./components/Sidebar";

const {Header, Content} = Layout
const { Meta } = Card


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

const Receipt = () => (
    <Card
        className="receipt"
        hoverable
        cover={<img className="cover" alt="example" src="https://d85ecz8votkqa.cloudfront.net/support/help_center/Print_Payment_Receipt.JPG" />}
        actions={['€5,00', 'Sergi']}
    >
        <Meta
            title="Een bon"
            description="This is the description"
        />
    </Card>
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
    </Layout>
)

render(
    <Router>
        <App/>
    </Router>
    , document.querySelector('#target'))
