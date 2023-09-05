import { Col, Row } from 'antd'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import FollowedArtists from './FollowedArtists'


const Profile = () => {

    const [currentUser, setCurrentUser] = useState({})
    const [userName, setUserName] = useState("")
    const [profileImg, setProfileImg] = useState("")
    const USER_URL = 'https://api.spotify.com/v1/me'
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

    useEffect(() => {
        get_user_profile()

    }, []);
    useEffect(() => {


    }, [currentUser]);

    return (
        <div>
            <Row style={{ marginLeft: '15%', width: '80%', marginTop: '2vh' }} gutter={[16, 24]} align='bottom'>
                <Col xs={24} md={12} lg={6} sm={24} xl={6} xxl={6} >
                    <img style={{ borderRadius: '100px', width: '200px', height: '195px', }} src={`${profileImg}`} />
                    <p>{currentUser.name}</p>
                </Col>
                <Col xs={24} md={12} lg={6} sm={24} xl={6} xxl={6} align="center">
                    <h1>{userName}</h1>
                </Col>
            </Row>
            <FollowedArtists/>
        </div>


    )
}

export default Profile