import React, {useState} from "react";
import { Table, Button, Modal, Input, DatePicker, Upload, Form } from "antd";
import {PlusOutlined} from "@ant-design/icons";
import RegisterComponent from "../account/RegisterComponent";
//import AdminService from "../../services/AdminService";

const data = [
    {
        "email":"nguyenvana@gmail.com",
        "password":"123123",
        "fullname":"Nguyen Van A",
        "dob":"14/11/2000",
        "phone":"0386296244",
        "avatar":"abc",
        "level":"1",
        "course":[],
        "verifyAccount":false
    },
    {
        "email":"duongtai141120@gmail.com",
        "password":"123123",
        "fullname":"Duong Trong Tai",
        "dob":"14/11/2000",
        "phone":"0386296248",
        "avatar":"abc",
        "level":"1",
        "verifyAccount":false
    }
]

const columns = [
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Fullname',
      dataIndex: 'ullname',
      key: 'fullname',
    },
    {
      title: 'Date of Birth',
      dataIndex: 'dob',
      key: 'dob',
    },
    {
        title: 'Phone',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Avatar',
        dataIndex: 'avatar',
        key: 'avatar',
    },
    {
        title: 'Level',
        dataIndex: 'level',
        key: 'level',
    },
    {
        title: 'Verify Account',
        dataIndex:'verifyAccount',
        key:'verifyAccount',
    }
  ];

export default function AccountsComponent(){
    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [accounts, setAccounts] = useState(data);
    const [account, setAccount] = useState({
        "email":"",
        "fullname":"",
        "dob":"",
        "phone":"",
        "avatar":"",
        "level":"",
        "course":[],
        "verifyAccount":false
    });
    const [isAdd, setIsAdd] = useState(false);

    // componentDidMount = () =>{
    //     AdminService.getAccounts()
    //     .then(res =>{
    //         if(res.data.success){
    //             setAccounts(res.data.accounts);
    //         }
    //     })
    //     .catch(err =>{
    //         console.log(err);
    //     });
    // }

    const handleAddAccounts = () =>{
        setIsAdd(true);
    }

    const handleModalCancel = () =>{
        setIsAdd(false);
    }

    const handleOk = () =>{
        accounts.push(account);
    }

    const getBase64 = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

    const handleCancel = () => setPreviewOpen(false);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewOpen(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
    };

    const uploadButton = (
        <div>
        <PlusOutlined />
        <div
            style={{
            marginTop: 8,
            }}
        >
            Upload
        </div>
        </div>
    );

    const onFinish = async (values) => {
        setAccount({
            "email":account.email,
            "fullname":account.fullname,
            "dob":account.dob,
            "phone":account.phone,
            "avatar":"def",
        })
        setIsAdd(false);
    }

    return(
        <div style={{margin: "20px 0px 0px 50px"}}>
            <Button 
            type="primary"
            onClick={handleAddAccounts}>
                Add Account
            </Button>
            <Modal title="Add new account" open={isAdd} onOk={handleOk} onCancel={handleModalCancel}>
             <Form onFinish={onFinish}>
                <Form.Item 
                name='email'
                label="Email">
                    <Input placeholder="Email" value={account.email}/>
                </Form.Item>
                <Form.Item
                 name='fullname'
                 label="Fullname">
                    <Input placeholder="Fullname" value={account.fullname}/>
                </Form.Item>
                <Form.Item 
                name='dob'
                label="DoB">
                    <DatePicker value={account.dob}/>
                </Form.Item>
                <Form.Item
                name='phone' 
                label="Phone">
                    <Input placeholder="Phone" value={account.phone}/>
                </Form.Item>
                <Form.Item label="Avatar">
                    <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-circle" onPreview={handlePreview}
                    />
                </Form.Item>
             </Form>
           </Modal>
            <h1>List of Accounts</h1>
            <Table dataSource={data} columns={columns}/>
        </div>
    )
}