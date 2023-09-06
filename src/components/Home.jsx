import { Row, Col, Dropdown, Button, Space } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import Albums from './Albums'
import Tracks from './Tracks'
import Artists from './Artists'
import Search from 'antd/es/input/Search'
import { DownOutlined } from '@ant-design/icons'


const Home = () => {
    const [type, setType]=useState('');
    const [searchItem,setSearchItem]=useState('')
    const [buttonText,setButtonText]=useState('Select...')
    const storeType=useRef("Hello")
    const items = [
        {
            label: 'album',
            key: '1',
            //   icon: <UserOutlined />,
        },
        {
            label: 'artist',
            key: '2',
            //   icon: <UserOutlined />,
        },
        {
            label: 'track',
            key: '3',
            //   icon: <UserOutlined />,
        },
        {
            label: 'playlist',
            key: '4',
            //   icon: <UserOutlined />,
        },
    ];
    const handleButtonClick = (e) => {
        console.log('click left button', e);
    };
    const handleMenuClick = (e) => {
        //console.log('click', e);
        if(e.key === 1)
        {
            setType("album")
            setButtonText('album')
        }
        else if(e.key === 2)
        {
            setType("artist")
            setButtonText('artist')
        }
        else if(e.key === 3)
        {
            setType("track")
            setButtonText('track')
        }
        else if(e.key === 4)
        {
            setType("playlist")
            setButtonText('playlist')
        }
    };
    const menuProps = {
        items,
        onClick: handleMenuClick,

    };
    const onSearch = (e) => {
        setSearchItem(e)
    }

    return (
        <div >
            <div>
                <Row wrap='true' style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '15%', width: '80%', marginTop: '2vh' }}>
                    <Col lg={16} md={24} xxl={18} sm={16}>
                        <Search placeholder="input search text" enterButton="Search" size="large" onSearch={e=>{onSearch(e)}} />
                    </Col>
                    <Col lg={8} md={24} sm={16} flex={2}  >
                        <Dropdown menu={menuProps} >
                            <Button>
                                <Space>
                                    {buttonText}
                                    <DownOutlined />
                                </Space>
                            </Button>
                        </Dropdown>
                    </Col>
                </Row>
                <Row style={{ marginLeft: '15%', width: '80%', marginTop: '2vh' }}>
                    <Col lg={16} md={24} xxl={18} sm={16}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', paddingRight: 10 }}>
                            <h1 style={{ paddingLeft: '4%' }} >Albums</h1>
                            <p style={{ paddingTop: 18 }}>Show all</p>
                        </div>
                    </Col>
                    <Col lg={8} md={24} sm={16}>
                        <h1 style={{ paddingLeft: 5 }}>Top Charts</h1>
                    </Col>

                </Row>
                <Row style={{ marginLeft: '15%', width: '80%', marginTop: '2vh' }}>
                    <Col lg={16} md={24} xxl={18} sm={16} /* style={{ border: 'solid' }} */><Albums /></Col>
                    <Col lg={8} md={24} sm={16} /* style={{ border: 'solid' }} */><Tracks /></Col>
                </Row>
            </div>
            <div>
                <Row style={{ marginLeft: '15%', width: '80%', marginTop: '2vh' }}>
                    <Col lg={16} md={24} xxl={18} sm={16}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', paddingRight: 10 }}>
                            <h1 style={{ paddingLeft: '4%' }} >Artists</h1>
                            <p style={{ paddingTop: 18 }}>Show all</p>
                        </div>
                    </Col>
                    <Col lg={8} md={24} sm={16}>
                        <h1 style={{ paddingLeft: 5 }}>Categories</h1>
                    </Col>

                </Row>
                <Row style={{ marginLeft: '10%', width: '80%', marginTop: '2vh' }}>
                    <Col lg={16} md={24} xxl={18} sm={16} /* style={{ border: 'solid' }} */><Artists /></Col>
                    <Col lg={8} md={24} sm={16} /* style={{ border: 'solid' }} */></Col>

                </Row>
            </div>
        </div>
    )
}

export default Home



