import React, { useState } from 'react'
import { Layout, Menu } from 'antd'

import {
    ProjectOutlined,
    UserAddOutlined,
    ImportOutlined,
    LockOutlined,
    FileProtectOutlined,

} from '@ant-design/icons'


import { Link } from 'react-router-dom'


const { Sider } = Layout

const Aside = () => {

    const [collapsed, setCollapsed] = useState(false)

    const onCollapse = collapsed => {
        setCollapsed(collapsed)
    }

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
            <div className='logo' />
            <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                <Menu.Item key="1" icon={<ProjectOutlined />}>
                    <Link to='/' >Main</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<FileProtectOutlined />}>
                    <Link to='/setting'>Setting</Link>
                </Menu.Item>

                <Menu.Item key="3" icon={<UserAddOutlined />}>
                    <Link to='/attack'>Attack</Link>
                </Menu.Item>
                <Menu.Item key="4" icon={<LockOutlined />}>
                    <Link to='/target'>Target</Link>
                </Menu.Item>
                <Menu.Item key="5" icon={<ImportOutlined />}>
                    <Link to='/report'>Reporte</Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default Aside

