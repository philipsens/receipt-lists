import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import './main.css'
import Sidebar from './components/Sidebar'
import Dashboard from './components/pages/DashboardPage'
import ReceiptListPage from './components/pages/ReceiptListPage'

const App = () => (
  <Layout>
    <Sidebar />
    <Switch>
      <Route exact path="/receipt" component={ReceiptListPage} />
      <Route path="/receipt/:id" render={({ match }) => match.params.id} />
      <Route component={Dashboard} />
    </Switch>
  </Layout>
)

render(
  <Router>
    <App />
  </Router>,
  document.querySelector('#target'),
)
