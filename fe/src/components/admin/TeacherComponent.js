import React, {useState, useEffect} from 'react';
import {Button, Input, Space, Table} from 'antd';
import { 
    SearchOutlined, 
    EditOutlined, 
    DeleteOutlined, 
    PlusCircleOutlined, 
    ExclamationCircleOutlined } from '@ant-design/icons';
import AdminService from '../../services/AdminService';

const TeacherComponent = () =>{
    const [teachers, setTeachers] = useState([]);
    const [columns, setColumns] = useState([]);

    useEffect(() => {
        // AdminService.getAllTeachers()
        // .then(res => {
        //     if(res.data.success){
        //         const teachers = res.data.data || [];
        //         const teacher = teachers[0] || {};
        //         const cols = [];
        //         for(const key in teacher){
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
        setTeachers([
            {
                "email":"ngocduong5642@gmail.com",
                "fullname":"Nguyen Ngoc Duong",
                "dob":"14/11/2000",
                "phone":"0386296244",
                "avatar":"abc",
                "level":"2",
                "course":[],
                "verifyAccount":0
            },
            {
                "email":"phanvanc@gmail.com",
                "fullname":"Phan Van C",
                "dob":"10/10/2001",
                "phone":"0386296265",
                "avatar":"def",
                "level":"2",
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
                Add New Teacher
            </Button>
            <Space wrap>
                <Input placeholder='Search for teacher' 
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
            <Table dataSource={teachers} columns={columns}/>
        </div>
    )
}

export default TeacherComponent;