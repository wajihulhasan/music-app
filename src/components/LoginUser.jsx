import { Avatar } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginUser = () => {
    const navigate = useNavigate();
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
            //console.log(response.data)
            setUserName(response.data.display_name)
            setProfileImg(response.data.images[0].url)
        }
    }
    const navigateToProfile = () => {
        navigate('/profile')
    }
    useEffect(() => {
        get_user_profile()

    }, []);


    return (
        <div onClick={navigateToProfile} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', alignItems: 'center' }}>
            <Avatar onClick={navigateToProfile} size={'small'} src={`${profileImg}`} alt="profile" />
            <p >{userName}</p>
        </div>
    )
}

export default LoginUser