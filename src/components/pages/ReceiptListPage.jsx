import React from 'react'
import { Col, Icon, Layout, Menu, Row } from 'antd'
import Receipt from '../Receipt'

const { Header, Content } = Layout

const ReceiptListPage = () => (
  <Layout>
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
