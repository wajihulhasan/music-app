import { Card, Col, Popover } from 'antd'
import React from 'react'
const { Meta } = Card;
const Album = (props) => {
    return (
        <Col key={props.index} lg={4} md={6} sm={12} >
            <Popover>
                <Card size='small' hoverable style={{
                    width: 180,
                    padding:'6%',
                    backgroundColor:'#1f1f1f'
                }} cover={<img alt="example" src={props?.album?.images[1]?.url} />}>
                    <Meta  title = {<h3 style={{color:'#f0f0f0'}}>{props?.album?.name}</h3>} description= "www.instagram.com" />
                </Card>
            </Popover>
        </Col>
    )
}

export default Album

