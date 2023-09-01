import { Card, Col, Popover } from 'antd'
import React from 'react'


const Category = (props) => {

    return (
        <Col  xs={24} md={12} lg={6} sm={24} xl={6} xxl={6} >
            <Popover>
                <Card
                    hoverable
                    style={{ width: 180 }}
                    cover={<img alt="example" src={props?.category?.icons[0]?.url} />}
                >
                </Card>

            </Popover>
        </Col>
    )
}

export default Category

