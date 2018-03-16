import React from 'react'
import Col from 'antd/lib/col'
import Layout from 'antd/lib/layout'
import Row from 'antd/lib/row'
import Menu from 'antd/lib/menu'
import Icon from 'antd/lib/icon'
import Receipt from '../components/Receipt'
import AddReceipt from '../components/AddReceipt'

const { Header, Content } = Layout

const ReceiptListPage = () => (
  <Layout>
    <AddReceipt />
    <Header className="header">
      <Menu className="menu" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item>
          <Icon type="file-add" />
          <span>New Receipt</span>
        </Menu.Item>
      </Menu>
    </Header>
    <Content className="content">
      <Row gutter={16}>
        <Col xxl={6} xl={8} md={12} sm={24}>
          <Receipt />
        </Col>
        <Col xxl={6} xl={8} md={12} sm={24}>
          <Receipt />
        </Col>
        <Col xxl={6} xl={8} md={12} sm={24}>
          <Receipt />
        </Col>
        <Col xxl={6} xl={8} md={12} sm={24}>
          <Receipt />
        </Col>
        <Col xxl={6} xl={8} md={12} sm={24}>
          <Receipt />
        </Col>
        <Col xxl={6} xl={8} md={12} sm={24}>
          <Receipt />
        </Col>
      </Row>
    </Content>
  </Layout>
)

export default ReceiptListPage
