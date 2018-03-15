import React, { Component } from "react";
import Layout from "antd/lib/layout";
import Sidebar from "../components/Sidebar";

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Sidebar />
        {this.props.children}
      </Layout>
    );
  }
}
