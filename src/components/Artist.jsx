import { Col,Image } from 'antd'
import React from 'react'

const Artist = (props) => {
    console.log(props?.artist?.name)
    return (
        <Col span={6}>
            <div style={{marginLeft:'auto',marginTop:'auto'}}>
                <a href='https://www.w3schools.com/howto/howto_css_rounded_images.asp'>
                    <Image preview={false} style={{ borderRadius: '70%',margin:'auto' }} src={props?.artist?.images[2]?.url} />
                    <p style={{ textAlign: 'center' }}>{props?.artist?.name}</p>
                </a>
            </div>
        </Col>
    )
}

export default Artist