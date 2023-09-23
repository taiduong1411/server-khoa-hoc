import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import Cookies from "universal-cookie";
import Management from "./Management";
import Login from "../account/Login";
import HeaderLayout from "../common/Header";
import "../../App.css";

const { Content, Sider } = Layout;

const Admin = () => {
  const nav = useNavigate();
  const cookies = new Cookies();
  const currentUser = cookies.get("currentUser");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [target, setTarget] = useState(1);

  const items = [
    { label: 'Home', key: '1'},
    { label: "Teachers", key: "2" },
    { label: "Students", key: "3" },
  ];

  useEffect(() => {
    const token = cookies.get("token");
    if (!token) {
      nav("/");
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, []);

  const [selectedMenu, setSelectedMenu] = useState("2");
  const handleMenuClick = (e) => {
    setSelectedMenu(e.key);
    e.key == '1' ? nav('/home') : setTarget(e.key == '2'? 2 : 3);
  };

  return (
    <>
      {isLoggedIn ? (
        <Layout>
          <HeaderLayout level={currentUser.level} />
          <Layout hasSider>
            <Sider className="sider-admin">
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[selectedMenu]}
                items={items}
                onClick={(e) => handleMenuClick(e)}
              />
            </Sider>
            <Content className="content-admin">
              <Management type={target} />
            </Content>
          </Layout>
        </Layout>
      ) : (
        <Login />
      )}
    </>
  );
};
export default Admin;
