// @flow
import * as React from 'react'
import Layout from 'antd/lib/layout'
import Sidebar from '../components/Sidebar'

type Props = {
  children: React.Node,
}

const App = ({ children }: Props) => (
  <Layout>
    <Sidebar />
    {children}
  </Layout>
)

export default App
