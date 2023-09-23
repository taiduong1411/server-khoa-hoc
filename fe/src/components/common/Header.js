import React, { useState, useEffect } from "react";
import { Layout, Row, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Cookies from "universal-cookie";
import User from "./User";
import "../../App.css";

const { Header } = Layout;

const HeaderLayout = ({ level }) => {
  const cookies = new Cookies();
  const user = cookies.get("currentUser");
  const [isNormalUser, setIsNormalUser] = useState(false);

  useEffect(() => {
    setIsNormalUser(level.toString() === "1" ? true : false);
  });

  return (
    <Header className="headerStyle">
      <Row>
        <img
          className="logoHome"
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          alt="logo"
        />
        <div className="brand">Knowledge Center</div>
        {isNormalUser && (
          <Input
            className="input-search-home"
            placeholder="Search..."
            prefix={<SearchOutlined />}
          />
        )}
        <User user={user} />
      </Row>
    </Header>
  );
};

export default HeaderLayout;
