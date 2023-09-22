import React from 'react';
import { UserOutlined, LockOutlined, ProfileOutlined, LogoutOutlined } from '@ant-design/icons';
import { Dropdown, message, Space } from 'antd';

const handleMenuClick = (e) => {
  message.info('Click on menu item.');
  console.log('click', e);
};

const items = [
  {
    label: 'Change password',
    key: '1',
    icon: <LockOutlined />,
  },
  {
    label: 'Profile',
    key: '2',
    icon: <ProfileOutlined />,
  },
  {
    label: 'Logout',
    key: '3',
    icon: <LogoutOutlined />,
    danger: true,
  }
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};
const User = (props) => (
  <Space wrap>
    <Dropdown.Button menu={menuProps} placement="topRight" icon={<UserOutlined />}
        style={{
            margin: "-45px 1250px"
        }}>
      {props.user.fullName}
    </Dropdown.Button>
  </Space>
);
export default User;