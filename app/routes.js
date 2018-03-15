/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import ReceiptListPage from './containers/ReceiptListPage.jsx'
import DashboardPage from './containers/DashboardPage.jsx'

export default () => (
  <App>
    <Switch>
      <Route exact path="/receipt" component={ReceiptListPage} />
      <Route path="/receipt/:id" render={({ match }) => match.params.id} />
      <Route component={DashboardPage} />
    </Switch>
  </App>
);
