import React from "react";
import {
    ExclamationCircleOutlined,
    EditOutlined,
    DeleteOutlined
} from '@ant-design/icons';
import { Space, Button } from "antd";

const Action = () => {
    return(
        <Space size='middle'>
            <Button icon={<ExclamationCircleOutlined/>}/>
            <Button type='primary' icon={<EditOutlined/>}/>
            <Button danger icon={<DeleteOutlined/>}/>
        </Space>
    )
};

export default Action;