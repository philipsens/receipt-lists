// @flow
import * as React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'
import Routes from '../routes'

type Props = {
  store: {},
  history: {},
}

const Root = ({ store, history }: Props) => (
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>
)

export default Root
