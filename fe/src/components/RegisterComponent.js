import React, { useState } from 'react';
import {Button,Form,Input} from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import AccountService from '../services/AccountService';
import '../App.css';

export default function RegisterComponent(){
  const [account, setAccount] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    address:'',
    phone:'',
    level: ''
  });

  const [confirmPassword, setConfirmPassword] = useState('');

  const onFinish = (values) => {
    AccountService.register(values)
    .then(res => {
        console.log('Register successful!');
    })
    .catch(e =>{
        console.log(e);
    })
  };

  const handleChange = (e) => {
    setAccount({...account, [e.target.name]: e.target.value });
  };

  return (
    <div className="register">
        <h1>Register Account</h1>
        <Form name="normal_register" onFinish={onFinish}>
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
      <Form.Item
        name="confirmPassword"
        rules={[{ required: true, message: 'Please confirm your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Repeat Password"
          value={confirmPassword} onChange={(e) => handleChange(e)}
        />
      </Form.Item>
      <Form.Item name="firstName">
        <Input type='text' placeholder='First Name' value={account.firstName} onChange={(e) => handleChange(e)}/>
      </Form.Item>

      <Form.Item name="lastName">
        <Input type='text' placeholder='Last Name' value={account.lastName} onChange={(e) => handleChange(e)}/>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Register
        </Button>
        Or <a href="/">Login</a>
      </Form.Item>
    </Form>
    </div>
  );
};