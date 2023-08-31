import { Row, Col } from 'antd'
import React from 'react'
import Albums from './Albums'
import Tracks from './Tracks'
const Home = () => {
    return (
        <div>
            <Row style={{ marginLeft: '15%', width: '80%', marginTop: '2vh' }}>
                <Col lg={16} md={24} xxl={18} sm={16} style={{ border: 'solid' }}><Albums /></Col>
                <Col lg={8} md={24} sm={16} style={{ border: 'solid' }}><Tracks/></Col>
            </Row>
        </div>
    )
}

export default Home