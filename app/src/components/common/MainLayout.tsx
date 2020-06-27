import React, { FC } from 'react';
import { Layout, Menu } from 'antd';
import {
  ScheduleOutlined,
  FundOutlined,
  BookOutlined,
  SettingOutlined,
  UserOutlined,
  TeamOutlined,
  NodeIndexOutlined,
} from '@ant-design/icons';
import { Logo } from './Logo';

interface IProps {}

export const MainLayout: FC<IProps> = ({ children }) => {
  return (
    <Layout>
      <Layout.Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}>
        <div
          style={{
            height: 64,
            padding: '0 20px',
          }}>
          <div
            style={{
              height: 64,
              display: 'flex',
              alignItems: 'center',
            }}>
            <Logo size={80} />
          </div>
        </div>
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['4']}>
          <Menu.Item key='6' icon={<ScheduleOutlined />}>
            Schedule
          </Menu.Item>
          <Menu.Item key='5' icon={<FundOutlined />}>
            Progress
          </Menu.Item>
          <Menu.Item key='2' icon={<TeamOutlined />}>
            Students
          </Menu.Item>
          <Menu.Item key='1' icon={<UserOutlined />}>
            Educators
          </Menu.Item>
          <Menu.Item key='3' icon={<BookOutlined />}>
            Courses
          </Menu.Item>
          <Menu.Item key='4' icon={<NodeIndexOutlined />}>
            Exercises
          </Menu.Item>
          <Menu.Item key='7' icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout className='site-layout' style={{ marginLeft: 200 }}>
        <Layout.Header className='site-layout-background' style={{ padding: '0 20px' }}>
          <div style={{ display: 'flex', color: '#fff' }}>
            <div>S</div>
            <div>User</div>{' '}
          </div>
        </Layout.Header>
        <Layout.Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div className='site-layout-background' style={{ padding: 24, textAlign: 'center' }}>
            {children}
          </div>
        </Layout.Content>
        <Layout.Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Layout.Footer>
      </Layout>
    </Layout>
  );
};
