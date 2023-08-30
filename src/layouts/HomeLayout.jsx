import { Layout, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider'
import { Content, Footer, Header } from 'antd/es/layout/layout';
import React from 'react'
import Logo from '../components/Logo';
import {
    UploadOutlined,
    HeartFilled,
    VideoCameraOutlined,
    HomeFilled
} from '@ant-design/icons';
import { Button } from 'antd';


const HomeLayout = (props) => {

    //sidebar styling
    const siderStyle = {
        textAlign: 'center',
        lineHeight: '120px',
        color: '#fff',
        height: '80vh',
        // backgroundColor: '#262626',

    };

    //styling the header component
    const headerStyle = {
        color: "white",
        position: 'sticky',
        top: 0,
        width:'100%'

    }

    const items = [
        {
            key: '1',
            icon: <HomeFilled />,
            label: 'Home',
        },
        {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: 'Browse',
        },
        {
            key: '3',
            icon: <UploadOutlined />,
            label: 'Playlists',
        },
        {
            key: '4',
            icon: <HeartFilled />,
            label: 'Favorites',
        }

    ]
    return (
        <Layout >
            <Header style={headerStyle}>< Logo /><p style={{}}>Music Beats</p></Header>
            <Layout>
                <Sider style={siderStyle}>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={items}
                    />
                    <Button type="primary" style={{width:'25vh'}} ghost>
                        Login
                    </Button>
                </Sider>
                <Content >
                    {props.children}
                </Content>
            </Layout>

            <Footer style={{ textAlign: 'center', position: 'sticky', bottom: 0 }}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>

    )
}

export default HomeLayout