import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import Cookies from "universal-cookie";
import HeaderLayout from "../common/Header";
import ContentPart from "./Content";
const { Sider, Content } = Layout;

const Home = () => {
  const nav = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cookie = new Cookies();
  const currentUser = cookie.get("currentUser");
  const items = [
    { label: "Home", key: "1" },
    { label: "Roadmap", key: "2" },
    { label: "Blog", key: "3" },
  ];

  useEffect(() => {
    const token = cookie.get("token");
    if (!token) {
      nav("/");
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <>
      {isLoggedIn && (
        <Layout>
          <HeaderLayout level={currentUser.level} />
          <Layout>
            <Sider className="sider-home">
              <Menu
                theme="light"
                mode="inline"
                items={items}
                defaultSelectedKeys={["1"]}
              />
            </Sider>
            <Content className="content-style">
              <ContentPart />
            </Content>
          </Layout>
        </Layout>
      )}
    </>
  );
};

export default Home;
