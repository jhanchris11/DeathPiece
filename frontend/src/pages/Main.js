import React, { Fragment } from 'react'
import { Layout } from 'antd'
import FooterMain from '../components/Layout/Footer'
import Breadcrumb from '../components/Layout/Content'
const { Content } = Layout
const Main = () => {
    return (
        <Fragment>
            <Content className='cl-content'>
                <Breadcrumb />
                <div className='cl-content-bg'>
                    <p>Main</p>
                </div>
            </Content>
            <FooterMain />
        </Fragment>
    )
}

export default Main
