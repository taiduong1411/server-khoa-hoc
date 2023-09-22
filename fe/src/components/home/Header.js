import React from 'react';
import { Layout, Row, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import User from '../common/User';
import '../../App.css';

const { Header } = Layout;

const HeaderPart = () => {
    const user = {
      fullName: 'Nguyen Van A'
    };

    return(
        <Header className='headerStyle'>
        <Row>
          <img
            className='logoHome'
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
            alt="logo"
          />
          <div className='brand'>
            Knowledge Center
          </div>
          <Input
            className="input-search-home"
            placeholder="Search..."
            prefix={<SearchOutlined />}
          />
          <User user={user}/>
        </Row>
      </Header>
    )
}

export default HeaderPart;