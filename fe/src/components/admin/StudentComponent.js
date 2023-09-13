import React, {useState, useEffect} from 'react';
import {Button, Input, Space, Table, Layout} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import AdminService from '../../services/AdminService';

const {Header} = Layout;

export default function StudentComponent(){
    const [students, setStudents] = useState([]);
    const [columns, setColumns] = useState([]);
    
    useEffect(() => {
        AdminService.getAllStudents()
        .then(res => {
            console.log(res.data);
            if(res.data.success){
                const students = res.data.data || [];
                const student = students[0] || {};
                const cols = [];
                for(const key in student){
                    if(key !== '_id' && key !== '__v'){
                        cols.push({
                            title: key.toLocaleUpperCase(),
                            dataIndex: key,
                        });
                    }
                }
                setColumns(cols);
                setStudents(res.data.data);
            }
        })
        .catch(err => {
            console.log(err);
        })
    },[]);

    return(
        <div>
            <Header style={{backgroundColor: 'transparent', height: 20, fontWeight: 'bold', margin: '-20px 0 20px 0'}}>
                STUDENT MANAGEMENT
            </Header>
            <Button type='primary' style={{margin: '20px 0 10px 0'}}>Add New Student</Button>
            <Space wrap>
                <Input placeholder='Search for student' style={{width: '500px', marginLeft:'500px', borderRight: 0}}/>
                <Button icon={<SearchOutlined />} style={{marginLeft: '-15px', borderLeft: 0, borderRadius: '0 5px 5px 0'}}/>
            </Space>
            <Table dataSource={students} columns={columns}/>
        </div>
    )
}