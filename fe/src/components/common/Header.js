import React from "react";
import { Button, Input } from "antd";
import {PlusCircleOutlined, SearchOutlined} from '@ant-design/icons';

const Header = (props) => {
    return (
        <>
            <Button type='primary' icon={<PlusCircleOutlined/>}
                className="btn-add-new">
                Add New {props.type.toString() === '1' ? 'Teacher': 'Student'}
            </Button>
            <Input
                className="input-search"
                placeholder={props.type.toString() === '1' ? 'Search for teacher' : 'Search for student'} 
                prefix={<SearchOutlined/>}
            />
        </>
    )
}

export default Header;