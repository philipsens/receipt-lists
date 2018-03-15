// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';
import Routes from '../routes';

type Props = {
  store: {},
  history: {}
};

export default class Root extends Component<Props> {
  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={this.props.history}>
          <Routes />
        </Router>
      </Provider>
    );
  }
}
