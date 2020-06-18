import React, { Fragment } from 'react'
import { Layout } from 'antd'
import FooterMain from '../components/Layout/Footer'
import Breadcrumb from '../components/Layout/Content'
const { Content } = Layout
const Setting = () => {
    return (
        <Fragment>
            <Content className='cl-content'>
                <Breadcrumb />
                <div className='cl-content-bg'>
                    <p>Setting</p>
                </div>
            </Content>
            <FooterMain />
        </Fragment>
    )
}

export default Setting