import { HeartOutlined, SoundFilled, StepBackwardOutlined, CaretRightOutlined, StepForwardOutlined } from '@ant-design/icons'
import { Col, Row, Space } from 'antd'
import Slider from 'rc-slider'
import React from 'react'

const Musicbar = () => {
    return (
        <Row gutter={16}>
            <Col span={8}>
                <div style={{ display: 'flex' }}>
                    <Space>
                        <img style={{ width: 40, height: 40, marginTop: 'auto', marginBottom: 'auto' }} src="https://i.scdn.co/image/ab67616d0000485128933b808bfb4cbbd0385400" />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <h6>Jealous</h6>
                            <p>Fireboy</p>
                        </div>
                    </Space>
                </div>
            </Col>
            <Col span={8} >
                <div style={{ display: 'flex', height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <Space size={"large"}>
                        <div ><StepBackwardOutlined style={{ fontSize: 24 }} /></div>
                        <div ><CaretRightOutlined style={{ fontSize: 24 }} /></div>
                        <div><StepForwardOutlined style={{ fontSize: 24 }} /></div>
                    </Space>

                </div>
            </Col>
            <Col span={8}>
                <div style={{ display: 'flex', height: '100%', width: '100%', justifyContent: 'end' }}>
                    < HeartOutlined />
                    <SoundFilled />
                    <Slider defaultValue={10} />


                </div>

            </Col>
        </Row>
    )
}

export default Musicbar