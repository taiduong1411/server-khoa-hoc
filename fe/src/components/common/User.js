import React from "react";
import { useNavigate } from "react-router-dom";
import {
  UserOutlined,
  LockOutlined,
  ProfileOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import Cookies from "universal-cookie";

const items = [
  {
    label: "Change password",
    key: "1",
    icon: <LockOutlined />,
  },
  {
    label: "Profile",
    key: "2",
    icon: <ProfileOutlined />,
  },
  {
    label: "Logout",
    key: "3",
    icon: <LogoutOutlined />,
    danger: true,
  },
];

const User = (props) => {
  const nav = useNavigate();
  const cookie = new Cookies();
  const handleMenuClick = (e) => {
    switch (e.key) {
      case "3":
        cookie.remove("token");
        nav("/");
        break;
    }
  };

  const menu = {
    items,
    onClick: handleMenuClick
  };

  return (
    <Space wrap>
      <Dropdown.Button
        menu={menu}
        placement="topRight"
        icon={<UserOutlined />}
        style={{
          margin: "-45px 1250px",
        }}
      >
        {props.user.fullname}
      </Dropdown.Button>
    </Space>
  );
};

export default User;
