import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider'
import { Header } from 'antd/es/layout/layout';
import React from 'react'
import music_icon from '../assets//images/music_icon.png'

const HomeLayout = () => {

    //sidebar styling
    const siderStyle = {
        textAlign: 'center',
        lineHeight: '120px',
        color: '#fff',
        // backgroundColor: '#262626',
        height: '100vh'
      };
    
    //styling the header component
    const headerStyle={
        color: "white",
        
    }
  return (
    <Layout>
        <Header style={headerStyle}><img src={music_icon}/></Header>
        <Layout>
        <Sider style={siderStyle}>
            Side bar
        </Sider>
        </Layout>
        
    </Layout>
  )
}

export default HomeLayout