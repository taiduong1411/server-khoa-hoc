import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import {
  LockOutlined,
  MailOutlined,
  LoginOutlined
} from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import axios from "axios";
import Cookies from "universal-cookie";
import "../../App.css";

const url = "http://localhost:4000/api/account";

const Login = () => {
  const cookie = new Cookies();
  const nav = useNavigate();
  const [account, setAccount] = useState({
    email: "",
    password: "",
  });

  const onFinish = async (values) => {
    axios({
      method: "POST",
      url: `${url}/login`,
      data: values,
    })
      .then((res) => {
        if (res.data.success) {
          setAccount({
            email: res.data.data.email,
            password: res.data.data.password,
          });

          cookie.set("token", res.data.accessToken);
          cookie.set("currentUser", res.data.data);

          switch (res.data.data.level) {
            case "2":
              nav("/teacher");
              break;
            case "3":
              nav("/admin");
              break;
            default:
              nav("/home");
              break;
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccount({ ...account, [name]: value });
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <Form name="normal_login" className="login-form" onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            {
              type: "email",
              message: "Email address must be a valid email address.",
            },
          ]}
        >
          <Input
            prefix={<MailOutlined className="site-form-item-icon" />}
            placeholder="Email"
            value={account.email}
            onChange={(e) => handleChange(e)}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please input your Password!" },
            { min: 6, message: "Password has minimum length is 6 characters" },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            value={account.password}
            onChange={(e) => handleChange(e)}
          />
        </Form.Item>
        <Form.Item style={{ margin: "-20px 0px 10px 0px" }}>
          <a className="login-form-forgot" href="/account/reset-password">
            Forgot password?
          </a>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            icon = {<LoginOutlined />}
          >
            Log in
          </Button>{" "}
          Or <a href="/account/register">Register now?</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
