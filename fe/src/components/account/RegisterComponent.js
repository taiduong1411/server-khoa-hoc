import React, { useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Button,Form,Input} from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import AccountService from '../../services/AccountService';
import '../../App.css';

export default function RegisterComponent(){
  const nav = useNavigate();
  const [account, setAccount] = useState({
    email: '',
    password: ''
  });

  const onFinish = (values) => {
    AccountService.register(values)
    .then(res => {
      if(res.data.success){
        setAccount({
          email: res.data.data.email,
          password: res.data.data.password,
          dob: res.data.data.dob,
          phone: res.data.data.phone,
          fullname: res.data.data.fullname
        })
        console.log(res.data);
        nav('/');
      }
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
        name="email"
        rules={[
          { required: true, message: 'Please input your email!' },
          { type:'email', message: 'Email address must be a valid email address'}
        ]}
      >
        <Input prefix={<MailOutlined className="site-form-item-icon" />} 
        placeholder="Email" value={account.email} onChange={(e) => handleChange(e)}/>
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          { required: true, message: 'Please input your Password!' },
          { min:6, message: 'Password must be at least 6 characters'}
      ]}
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
        rules={[
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (getFieldValue('password') === value) {
              return Promise.resolve();
            }
            if(!value){
              return Promise.reject(new Error('Please confirm your password'));
            }
            return Promise.reject(new Error('The confirm password that you entered do not match!'));
          },
        })
      ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Repeat Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Register
        </Button>
        {" "}Or{" "}<a href="/">Login</a>
      </Form.Item>
    </Form>
    </div>
  );
};