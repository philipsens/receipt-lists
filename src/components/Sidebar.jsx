import { Icon, Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import React from 'react'

const { Sider } = Layout

const Sidebar = () => (
  <Sider className="sidebar" breakpoint="sm" collapsedWidth="0">
    <div className="logo">
      <Icon type="bars" />
      <span>Receipt Lists</span>
    </div>
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1">
        <Link to={'/'}>
          <Icon type="dashboard" />
          <span>Dashboard</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to={'/list'}>
          <Icon type="bars" />
          <span>All Lists</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to={'/receipt'}>
          <Icon type="file" />
          <span>All Receipts</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to={'/settings'}>
          <Icon type="setting" />
          <span>Settings</span>
        </Link>
      </Menu.Item>
    </Menu>
  </Sider>
)

export default Sidebar
