import { PauseCircleFilled, PlayCircleFilled } from '@ant-design/icons'
import { Row, Col, Space, Button } from 'antd'
import React, { useState } from 'react'

const Song = (props) => {

  const [play, setPlay] = useState(false)
  console.log("Song Name is::: ", props?.song?.track)
  function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return (
      seconds == 60 ?
        (minutes + 1) + ":00" :
        minutes + ":" + (seconds < 10 ? "0" : "") + seconds
    );
  }
  let snd=null
  const playTrack = (song_url) => {
    if (!play) {
      snd = new Audio(song_url)
      console.log("audio object is:: ",snd?.src) 
      setPlay(true)
      snd.play()
    }
    else {
      setPlay(false)
      snd?.pause()
    }

  }
  return (
    <div>
      <Row >
        <Col span={8} >
          {/* <div style={{ display:'inline-block' }}> */}
          <Row>
            <Col>
              <img style={{ width: 40 }} src={`${props?.song?.track?.album?.images[2]?.url}`} />
            </Col>
            <Col >
              <h5 style={{ marginLeft: '10px' }}>{props?.song?.track?.name}</h5>

            </Col>
          </Row>
          {/* </div> */}
        </Col>
        <Col span={8}>
          {millisToMinutesAndSeconds(props?.song?.track?.duration_ms)}
          <Button onClick={() => { playTrack(props?.song?.track?.preview_url) }} style={{ marginLeft: 10, paddingRight: 0, paddingLeft: 0, paddingTop: 0, paddingBottom: 0, borderRightWidth: 0, borderLeftWidth: 0, height: 16 }}>
            {!play ? <PlayCircleFilled style={{ margin: 0 }} /> : <PauseCircleFilled />}
          </Button>
        </Col>
      </Row>
    </div >
  )
}

export default Song