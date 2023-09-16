import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu} from 'antd';
import Cookies from 'universal-cookie';
//import Student from './Student';
import Management from './Management';
import Login from '../account/Login';

const { Content, Sider} = Layout;


const Admin = () => {
  const nav = useNavigate();
  const cookies = new Cookies();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [target, setTarget] = useState(1);

  const items = [
    {label: 'Teachers', key: '1'},
    {label: 'Students', key: '2'},
  ];
  
  useEffect(()=>{
    const token = cookies.get('token');
    if (!token) {
      nav('/');
      setIsLoggedIn(false);
    }
    else{
      setIsLoggedIn(true);
    }
  },[]);

  const [selectedMenu, setSelectedMenu] = useState('1');
  const handleMenuClick = (e) => {
    setSelectedMenu(e.key);
    setTarget(e.key === '1'?1:2);
  };

  return(
    <>
      {
      isLoggedIn ? (
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
        <Menu theme="dark" mode="inline" 
        defaultSelectedKeys={[selectedMenu]} items={items} 
        onClick={(e) => handleMenuClick(e)}/>
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
          <Management type={target}/>
        </Content>
      </Layout>
    </Layout>
      ): <Login/>
    } 
    </>
  )
};
export default Admin;