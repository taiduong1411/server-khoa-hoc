// import React, { useState } from 'react';
// import { Menu } from 'antd';
// import AccountsComponent from './AccountsListComponent';
// import { Header } from 'antd/es/layout/layout';

// const AdminComponent = () => {
//   const [selectedMenu, setSelectedMenu] = useState({
//     'account_list':false,
//     'teachers':false,
//     'student_list':false,
//     'courses':false,
//   });

//   const onClick = (e) => {
//     setSelectedMenu(previousState =>{
//       return {
//       ...previousState,
//         [e.key]:true,
//       };
//     })
//   };

//   return (
//     <div>
//         <Header>

//         </Header>
//         <div style={{display: "flex", flexDirection: 'row'}}>
//             <Menu
//                 onClick={onClick}
//                 style={{width: '150', height: '200'}}
//                 defaultSelectedKeys={['1']}
//                 defaultOpenKeys={['sub1']}
//                 mode="inline"
//                 items={[
//                     {label: 'Accounts List', key: 'accounts_list',},
//                     {label:'Teachers List', key: 'teachers'},
//                     {label: 'Students List', key: 'student_list'},
//                     {label: 'Courses List', key: 'course_list'},
//                 ]}
//             />
//             <div>
//               <AccountsComponent/>
//             </div>
//         </div>
//     </div>
    
    
//   );
// };
// export default AdminComponent;

import React from 'react';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import AccountsComponent from './AccountsListComponent';
const { Header, Content, Sider } = Layout;
const items = [
  {label: 'Home', key: 'home'},
  {label:'Accounts', key: 'accounts'},
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
          <AccountsComponent/>
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminComponent;