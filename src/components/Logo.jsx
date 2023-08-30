import React from 'react'
import MusicIcon from "../assets/images/music_icon.png"
const Logo = () => {
  return (
    <a href='https://www.youtube.com/' style={{fontSize:'4vh', fontWeight:'bold'}} ><img style={{width: 30, height: 30, marginTop: 20, marginRight:20}} src={MusicIcon} alt='App Logo'/>Beats Music</a>
  )
}

export default Logo