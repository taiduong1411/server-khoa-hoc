import React, {useState} from 'react';
import {json, useNavigate} from 'react-router-dom';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import AccountService from '../../services/AccountService';
import '../../App.css';

export default function LoginComponent(){
  const nav = useNavigate();
  const [account, setAccount] = useState({
    email: '',
    password:''
  });

  const onFinish = async (values) => {
    AccountService.login(values)
      .then(res =>{
        if(res.data.success){
          setAccount({
            email: res.data.data.email,
            password: res.data.data.password
          });

          localStorage.setItem('token', JSON.stringify({'email': res.data.data.email,'level': res.data.data.level}));
          
          switch(res.data.data.level){
            case '1':
              nav('/home');
              break;
            case '2':
              nav('/teacher');
              break;
            case '3':
              nav('/admin');
              break;
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
    }

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
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: 'Please input your email!' },
        { type: 'email', message: 'Email address must be a valid email address.'}]}
      >
        <Input prefix={<MailOutlined className="site-form-item-icon" />} 
        placeholder="Email" value={account.email} onChange={(e) => handleChange(e)}/>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!'},
        { min:6, message: 'Password has minimum length is 6 characters'}]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          value={account.password} onChange={(e) => handleChange(e)}
        />
      </Form.Item>
      <Form.Item style={{margin:"-20px 0px 10px 0px"}}>
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