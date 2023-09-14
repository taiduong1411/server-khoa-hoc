import React, {useState} from 'react';
import { Layout, Menu} from 'antd';
import StudentComponent from './StudentComponent';
import TeacherComponent from './TeacherComponent';

const { Content, Sider} = Layout;
const items = [
  {label: 'Teachers', key: '1'},
  {label: 'Students', key: '2'},
];

const AdminComponent = () => {
  const [selectedMenu, setSelectedMenu] = useState('1');
  const handleMenuClick = (e) => {
    setSelectedMenu(e.key);
  };

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
        <div className="demo-logo-vertical">
          <img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" alt="logo" 
          style={{
            width: '100%',
            height: '50px',
            marginTop: '20px'
          }} />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[selectedMenu]} items={items} onClick={(e) => handleMenuClick(e)}/>
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
          {
            selectedMenu === '1'? <TeacherComponent/> : <StudentComponent/>
          }
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminComponent;