import React from "react";
import { Layout, Menu } from "antd";
import HeaderPart from "./Header";
import ContentPart from "./Content";
const { Sider, Content } = Layout;

const Home = () => {
  const items = [
    { label: "Home", key: "1" },
    { label: "Roadmap", key: "2" },
    { label: "Blog", key: "3" },
  ];
  return (
    <Layout>
      <HeaderPart/>
      <Layout>
        <Sider className="sider-home">
          <Menu theme="dark" mode="inline" items={items} />
        </Sider>
        <Content className="content-style">
          <ContentPart/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
