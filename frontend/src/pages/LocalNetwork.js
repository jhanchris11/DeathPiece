import React, { Fragment, useEffect, useState} from 'react'
import { Layout } from 'antd'
import FooterMain from '../components/Layout/Footer'
import Breadcrumb from '../components/Layout/Content'
import { Table } from 'antd';

import {
  getDataFromLocalNetwork
} from "../services/localNetworkService";

const { Content } = Layout


const LocalNetwork = () => {
  const [dataLocal, setData] = useState([]);
  useEffect(() => {
    getDataLocalNetwork();
  }, []);

  

  async function getDataLocalNetwork() {
    let result =  await getDataFromLocalNetwork();
    let contenido = result.data
    setData(contenido)
    console.log("data local:")

  }

  console.log(dataLocal)

  const columns = [
  {
    title: 'IP',
    dataIndex: 'IP',
    render: text => <a>{text}</a>,
  },
  {
    title: 'MAC',
    className: 'column-money',
    dataIndex: 'MAC',
    align: 'right',
  },
  {
    title: 'NAME',
    dataIndex: 'NAME',
  },
];





const data = dataLocal;
    return (
        <Fragment>
            <Content className='cl-content'>
                <Breadcrumb />
                <div className='cl-content-bg'>
                    <Table
                        columns={columns}
                        dataSource={data}
                        bordered
                        title={() => 'Header'}
                        footer={() => 'Footer'}
                      />
                </div>
            </Content>
            <FooterMain />
        </Fragment>
    )
}

export default LocalNetwork