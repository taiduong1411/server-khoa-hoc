import React from 'react';
import { Layout, Menu, theme} from 'antd';
import StudentComponent from './StudentComponent';

const { Content, Sider} = Layout;
const items = [
  {label: 'Teachers', key: 'teachers'},
  {label: 'Students', key: 'students'},
];

const AdminComponent = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
        }}
      >
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
          <StudentComponent/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminComponent;