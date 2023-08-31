import { HeartOutlined } from '@ant-design/icons'
import React from 'react'
const Track = (props) => {
    return (
        <div key={props.index} style={{marginLeft: 5, marginBottom:10,marginRight:5, backgroundColor:'#18181b', display: 'flex', paddingLeft: 4, justifyContent:'space-between' }}>
            <div style={{display:'flex'}}>
            <img style={{ width: 40, height: 40 }} src={props?.track?.album?.images[2]?.url} />
            <div style={{ paddingLeft:10, display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
                <h4 style={{ paddingTop: 4, margin: 0,color:'#e3e3e3' }}>{props?.track?.name}</h4>
                <p style={{ paddingBottom:4, margin: 0, color:'#e3e3e3' }}>{props?.track?.artists[0]?.name}</p>
            </div>
            </div>
            <div style={{ display: 'flex' }}>
                <p style={{color:'#e3e3e3'}}>3:31</p>
                <HeartOutlined />
            </div>
        </div>
    )
}

export default Track