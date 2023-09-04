import { Col, Image } from 'antd'
import React from 'react'

const Artist = (props) => {
    return (
        <Col xs={24} md={12} lg={6} sm={24} xl={6} xxl={6} >
            <div style={{ padding: 'auto',width: 'fit-content',margin:'auto'}}>
                <a href='https://www.w3schools.com/howto/howto_css_rounded_images.asp'>

                    <Image preview={false} style={{ borderRadius: '70%',alignContent:'center' }} src={props?.artist?.images[2]?.url} />
                    <p style={{ display: 'flex', width: 'fit-content', margin: 'auto',fontWeight:'bold' }}>{props?.artist?.name}</p>
                </a>
            </div>
        </Col>
    )
}

export default Artist