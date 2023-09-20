import React from "react";
import { Layout, Input, Row, Button, Menu, Carousel, Image } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  color: "#000",
  height: 64,
  backgroundColor: "#fff",
  border: "1px solid #f0f0f0",
};

const contentStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#fff",
};

const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#fff",
  width: "100px",
};

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#fff",
};

const carouselStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    borderRadius: '10px',
    margin: '10px 20px'
};

const Home = () => {
  const items = [
    { label: "Home", key: "1" },
    { label: "Roadmap", key: "2" },
    { label: "Blog", key: "3" },
  ];
  return (
    <Layout>
      <Header style={headerStyle}>
        <Row>
          <img
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            alt="logo"
            style={{
              width: 50,
              height: 50,
              left: 0,
              margin: "10px 6000px 0 -30px",
              display: "inline-block",
            }}
          />
          <Input
            className="input-search"
            placeholder="Search..."
            prefix={<SearchOutlined />}
            style={{
              width: 500,
              height: 30,
              margin: "-40px 0 0 450px",
              borderRadius: "10px",
            }}
          />
          <Button
            style={{
              background: "#ff9933",
              right: 0,
              margin: "-40px -1000px 0 400px",
            }}
          >
            Login
          </Button>
        </Row>
      </Header>
      <Layout>
        <Sider style={siderStyle}>
          <Menu theme="light" mode="inline" items={items} />
        </Sider>
        <Content style={contentStyle}>
          <Carousel autoplay>
            <div>
              <h3 style={carouselStyle}>HTML/CSS/JavaScript</h3>
            </div>
            <div>
              <h3 style={carouselStyle}>Python</h3>
            </div>
            <div>
              <h3 style={carouselStyle}>PHP</h3>
            </div>
            <div>
              <h3 style={carouselStyle}>Java</h3>
            </div>
          </Carousel>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Home;
