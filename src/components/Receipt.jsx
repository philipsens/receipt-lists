import React from 'react'
import { Card } from 'antd'

const { Meta } = Card

const Receipt = () => (
  <Card
    className="receipt"
    hoverable
    cover={
      <img
        className="cover"
        alt="example"
        src="https://d85ecz8votkqa.cloudfront.net/support/help_center/Print_Payment_Receipt.JPG"
      />
    }
    actions={['€5,00', 'Sergi']}
  >
    <Meta title="Een bon" description="This is the description" />
  </Card>
)

export default Receipt
