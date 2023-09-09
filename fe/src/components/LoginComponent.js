import React, {useState} from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import AccountService from '../services/AccountService';
import '../App.css';

export default function LoginComponent(){
  const [account, setAccount] = useState({
    username: '',
    password:''
  });

  const [remember, setRemember] = useState(true);

  const onFinish = async (values) => {
    AccountService.login(values)
    .then(res =>{
      setAccount({
        username: res.data.username,
        password: res.data.password
      });
      console.log('Login successful!');
    })
    .catch(err => {
      console.log(err);
    });
  };

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setAccount({...account, [name]: value});
  }

  return (
    <div className="login">
        <h1>Login</h1>
        <Form
      name="normal_login"
      className="login-form"
      initialValues={remember}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} 
        placeholder="Username" value={account.username} onChange={(e) => handleChange(e)}/>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          value={account.password} onChange={(e) => handleChange(e)}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox onChange={(e) => setRemember(e.target.value)}>Remember me</Checkbox>
        </Form.Item>
        <a className="login-form-forgot" href="/account/reset-password">
          Forgot password?
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        {' '}Or{' '} 
        <a href="/account/register">Register now?</a>
      </Form.Item>
    </Form>
    </div>
  );
};