import React, {useState, useEffect} from 'react';
import { Table } from 'antd';
import Cookies from 'universal-cookie';
import axios from 'axios';
import Action from '../common/Action';
import Header from '../common/Header'

const url = 'http://localhost:4000/api/admin';

const Management = (props) =>{
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);
    const cookie = new Cookies();

    useEffect(() => {
        const token = cookie.get('token');

        axios({
            method: 'GET',
            url: `${url}/${props.type.toString() === '1'?'all-teacher': 'all-student'}`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res =>{
            if(res.data.success){
                const data = res.data.data || [];
                const dt = data[0] || {};
                const cols = [];
                const colsHiddens = ["_id", "__v", "password", "verifyAccount", "course"]

                for(const key in dt){
                    if(!colsHiddens.includes(key)){
                        cols.push({
                            title: key.toLocaleUpperCase(),
                            dataIndex: key,
                        });
                    }
                }
                cols.push({
                    title: 'Action',
                    key: 'action',
                    render: (text, record) => <Action/>,
                    align: 'center'
                })
                setColumns(cols);
                setData(res.data.data);
            }
        })
        .catch(err => {
            console.log(err);
        })
    },[props.type]);

    return(
        <div>
            <Header type={props.type}/>
            <Table dataSource={data} columns={columns}/>
        </div>
    )
}

export default Management;