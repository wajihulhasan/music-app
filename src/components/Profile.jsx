import { Button, Col, Row } from 'antd'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import FollowedArtists from './FollowedArtists'
import Songs from './Songs'
import { BackwardFilled, ForwardFilled, PauseCircleFilled, PlayCircleFilled } from '@ant-design/icons'


const Profile = () => {

    const [currentUser, setCurrentUser] = useState({})
    const [userName, setUserName] = useState("")
    const [profileImg, setProfileImg] = useState("")
    const [play, setPlay] = useState(false)
    const USER_URL = 'https://api.spotify.com/v1/me'
    const play_url = 'https://api.spotify.com/v1/me/player/play';
    const pause_url = 'https://api.spotify.com/v1/me/player/pause';
    //get user personal info
    const get_user_profile = async () => {
        const response = await axios.get(`${USER_URL}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('user_token')}`
            }
        })
        if (response) {


            setUserName(response.data.display_name)
            setProfileImg(response.data.images[1].url)
        }
    }

    //function to play song on spotify
    const playSong = async () => {
        const response = await axios.put(`${play_url}`,
            {

                context_uri: "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr",
                offset: {
                    position: 5
                },
                position_ms: 0
            },
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('user_token')}`,
                    'Content-Type': 'application/json'
                }
            })
        if (response.status === 204) {
            setPlay(true)
            console.log("Start/Resume/Playback is working!!!")
        }

    }

    //pause the currently playing song
    const pauseSong = async () => {
        const response = await axios.put(`${play_url}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('user_token')}`,
            }
        })
        if (response.status === 204) {
            setPlay(false)
            console.log("Start/Resume/Playback is working!!!")
        }
    }
    useEffect(() => {
        get_user_profile()

    }, []);
    useEffect(() => {


    }, [currentUser]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Row style={{ marginLeft: '15%', width: '80%', marginTop: '2vh' }} gutter={[16, 24]} align='bottom'>
                <Col xs={24} md={12} lg={6} sm={24} xl={6} xxl={6} >
                    <img style={{ borderRadius: '100px', width: '200px', height: '195px', }} src={`${profileImg}`} />
                    <p>{currentUser.name}</p>
                </Col>
                <Col xs={24} md={12} lg={6} sm={24} xl={6} xxl={6} align="center">
                    <h1>{userName}</h1>
                </Col>
                <Col flex='auto' align="center">
                    <Button><BackwardFilled /></Button>
                    <Button onClick={() => {if(play) {playSong()}else{pauseSong()} }}>{play ? <PlayCircleFilled /> : <PauseCircleFilled />}</Button>
                    <Button><ForwardFilled /></Button>

                </Col>
            </Row>
            <Songs />
            <FollowedArtists />

        </div>


    )
}

export default Profile