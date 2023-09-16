import React from "react";
import { Button, Input } from "antd";
import {PlusCircleOutlined, SearchOutlined} from '@ant-design/icons';

const Header = (props) => {
    return (
        <>
            <Button type='primary' icon={<PlusCircleOutlined/>}
                style={{margin: '20px 0 10px 0'}}>
                Add New {props.type.toString() === '1' ? 'Teacher': 'Student'}
            </Button>
            <Input placeholder={props.type.toString() === '1' ? 'Search for teacher' : 'Search for student'} 
                style={{
                    width: '500px', 
                    marginLeft:'50px'
                }}
                prefix={<SearchOutlined/>}
            />
        </>
    )
}

export default Header;