import React, {useState, useEffect} from 'react';
import {Button, Input, Space, Table} from 'antd';
import { 
    SearchOutlined, 
    EditOutlined, 
    DeleteOutlined, 
    PlusCircleOutlined, 
    ExclamationCircleOutlined } from '@ant-design/icons';
import AdminService from '../../services/AdminService';

export default function StudentComponent(){
    const [students, setStudents] = useState([]);
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        // AdminService.getAllStudents()
        // .then(res => {
        //     if(res.data.success){
        //         const students = res.data.data || [];
        //         const student = students[0] || {};
        //         const cols = [];
        //         for(const key in student){
        //             if(key !== '_id' && key !== '__v'){
        //                 cols.push({
        //                     title: key.toLocaleUpperCase(),
        //                     dataIndex: key,
        //                 });
        //             }
        //         }
        //         setColumns(cols);
        //         setStudents(res.data.data);
        //     }
        // })
        // .catch(err => {
        //     console.log(err);
        // })
        setStudents([
            {
                "email":"nguyenvana@gmail.com",
                "fullname":"Nguyen Van A",
                "dob":"14/11/2000",
                "phone":"0386296244",
                "avatar":"abc",
                "level":"1",
                "course":[],
                "verifyAccount":0
            },
            {
                "email":"tranvanb@gmail.com",
                "fullname":"Tran Van B",
                "dob":"10/10/2001",
                "phone":"0386296265",
                "avatar":"def",
                "level":"1",
                "course":[],
                "verifyAccount":0
            },
        ]);
        
        setColumns([
            {
                title: 'Email',
                dataIndex: 'email',
                key: 'email',
            },
            {
                title: 'Full Name',
                dataIndex: 'fullname',
            },
            {
                title: 'Date of Birth',
                dataIndex: 'dob',
            },
            {
                title: 'Phone',
                dataIndex: 'phone',
            },
            {
                title: 'Avatar',
                dataIndex: 'avatar',
            },
            {
                title: 'Level',
                dataIndex: 'level',
                align: 'center',
            },
            {
                title: 'Verify Account',
                dataIndex:'verifyAccount',
                align: 'center',
            },
            {
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
            }
            
        ])
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