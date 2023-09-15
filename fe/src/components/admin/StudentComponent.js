import React, {useState, useEffect} from 'react';
import {Button, Input, Space, Table} from 'antd';
import { 
    SearchOutlined, 
    EditOutlined, 
    DeleteOutlined, 
    PlusCircleOutlined, 
    ExclamationCircleOutlined } from '@ant-design/icons';
import Cookies from 'universal-cookie';
import axios from 'axios';

const url = 'http://localhost:4000/api/admin';

export default function StudentComponent(){
    const [students, setStudents] = useState([]);
    const [columns, setColumns] = useState([]);
    const cookie = new Cookies();
    

    useEffect(() => {
        const token = cookie.get('token');
        console.log(token);
        console.log(typeof token);

        const config = {
            method: 'GET',
            url: `${url}/all-student`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        axios(config)
        .then(res =>{
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
                cols.push({
                    title: 'Action',
                    key: 'action',
                    render: (text, record) => (
                        <Space size='middle'>
                            <Button icon={<ExclamationCircleOutlined/>}/>
                            <Button type='primary' icon={<EditOutlined/>}/>
                            <Button danger icon={<DeleteOutlined/>}/>
                            </Space>
                    ),
                    align: 'center'
                })
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
            <Button type='primary' icon={<PlusCircleOutlined/>}
                style={{margin: '20px 0 10px 0'}}>
                Add New Student
            </Button>
            <Space wrap>
                <Input placeholder='Search for student' 
                style={{
                    width: '500px', 
                    marginLeft:'50px', 
                    borderRight: 0}}/>
                <Button icon={<SearchOutlined />} 
                style={{
                    marginLeft: '-20px', 
                    borderLeft: 0, 
                    borderRadius: '0 5px 5px 0'}}/>
            </Space>
            <Table dataSource={students} columns={columns}/>
        </div>
    )
}