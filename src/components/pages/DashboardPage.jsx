import React from "react";
import {Card, Col, Layout, Row} from "antd";

const {Header, Content} = Layout

const DashboardPage = () => (
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

export default DashboardPage