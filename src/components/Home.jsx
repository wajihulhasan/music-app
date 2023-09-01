import { Row, Col } from 'antd'
import React from 'react'
import Albums from './Albums'
import Tracks from './Tracks'
import Artists from './Artists'
const Home = () => {
    
    return (
        <div >
            <div>
                <Row style={{ marginLeft: '15%', width: '80%', marginTop: '2vh' }}>
                    <Col lg={16} md={24} xxl={18} sm={16}>
                        <div style={{ display: 'flex', justifyContent: 'space-between',paddingRight:10 }}>
                            <h1 style={{ paddingLeft: '4%' }} >Albums</h1>
                            <p style={{ paddingTop:18 }}>Show all</p>
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
                        <div style={{ display: 'flex', justifyContent: 'space-between' ,paddingRight:10}}>
                            <h1 style={{ paddingLeft: '4%' }} >Artists</h1>
                            <p style={{paddingTop:18}}>Show all</p>
                        </div>
                    </Col> 
                    <Col lg={8} md={24} sm={16}>
                        <h1 style={{ paddingLeft: 5 }}>Categories</h1>
                    </Col>

                </Row>
                <Row style={{ marginLeft: '10%', width: '80%', marginTop: '2vh' }}>
                    <Col lg={16} md={24} xxl={18} sm={16} /* style={{ border: 'solid' }} */><Artists  /></Col>
                    <Col lg={8} md={24} sm={16} /* style={{ border: 'solid' }} */></Col>

                </Row>
            </div>
        </div>
    )
}

export default Home