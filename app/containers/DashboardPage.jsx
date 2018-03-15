import React from 'react'
import Card from 'antd/lib/card'
import Col from 'antd/lib/col'
import Layout from 'antd/lib/layout'
import Row from 'antd/lib/row'

const { Header, Content } = Layout

const DashboardPage = () => (
  <Layout>
    <Header className="header" />
    <Content className="content">
      <Row gutter={16}>
        <Col span={6}>
          <Card title="Een widget ofzo">Hier staat info</Card>
        </Col>
      </Row>
    </Content>
  </Layout>
)

export default DashboardPage
