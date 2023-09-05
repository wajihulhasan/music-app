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
import Musicbar from '../components/Musicbar';
import Login from '../components/Login';
import Logout from '../components/Logout';
import { useNavigate } from 'react-router-dom';


const HomeLayout = (props) => {
    
    const navigate=useNavigate();
    //sidebar styling
    const siderStyle = {
        textAlign: 'center',
        lineHeight: '120px',
        color: '#fff',
        height: '100%',
        position: 'fixed',
        paddingTop: '10vh',
        left: 0,
        top: 0,
        bottom: 0,
        // backgroundColor: '#262626',

    };

    //styling the header component
    const headerStyle = {
        color: "white",
        // position: 'sticky',
        // top: 0,
        width: '100%',
        zIndex: 1,

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
            label: 'Categories',
        },
        {
            key: '3',
            icon: <UploadOutlined />,
            label: 'Artists',
        },
        {
            key: '4',
            icon: <HeartFilled />,
            label: 'Favorites',
        }

    ]
    const onClick = (e) => {
        if(e.key==='1')
        {
           navigate('/') 
        }
        else if(e.key === '2'){
            navigate('/categories')
        }
        else if(e.key === '3'){
            navigate('/library')
        }
        else if(e.key === '4'){
            navigate('/library')
        }

      };
   

    return (
        <Layout hasSider >
            {/* <Layout> */}
            <Sider style={siderStyle}>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={items}
                    onClick={onClick}
                />
                {localStorage.getItem('user_token')?<Logout/>:<Login/>}
                
            </Sider>
            <Layout>

                <Header style={headerStyle}>< Logo /></Header>
                <Content style={{ overflow: 'initial'}} >
                    {props.children}
                </Content>

                <Footer style={{ textAlign: 'center', position: 'fixed', bottom: 0,width:'100%',paddingBottom:'0%',paddingTop:'0%' }}><Musicbar/></Footer>
            </Layout>


        </Layout>

    )
}

export default HomeLayout