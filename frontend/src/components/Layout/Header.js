import React from 'react'
import { Layout, Avatar, Typography } from 'antd'
import hack from '../../img/logo.jpg'

const { Title } = Typography;
const { Header } = Layout

const HeaderSecundario = () => {

    return (
        <Header className='cl-header'>
            <Title level={3} className='cl-header-title'>Welcome <span className='name-user'>Hacking</span></Title>
            <Avatar className='img-cl' size='64' src={hack} alt='user'></Avatar>
        </Header>
    )
}

export default HeaderSecundario