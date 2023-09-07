import { Button } from 'antd'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


//connect to spotify function

const Login = () => {

    const navigate = useNavigate();
    // const [loginToken, setLoginToken] = useState(null)

    //connect to spotify    
    const connect_to_spotify = () => {
        const client_id = process.env.REACT_APP_CLIENT_ID
        const redirectUrl = 'http://localhost:3000/';
        const apiUrl = 'https://accounts.spotify.com/authorize';
        const scopes = ['user-read-private', 'user-read-email', 'playlist-read-private', 'playlist-read-collaborative', 'playlist-modify-private', 'user-library-read', 'user-library-modify', 'user-follow-read','user-read-playback-state','user-read-recently-played','user-modify-playback-state']
        console.log("connect to spotify: ",`${apiUrl}?client_id=${client_id}&redirect_uri=${redirectUrl}&scope=${scopes.join(" ")}&response_type=token&show_daialog=true`)
        window.location.href = `${apiUrl}?client_id=${client_id}&redirect_uri=${redirectUrl}&scope=${scopes.join(" ")}&response_type=token&show_daialog=true`
        

    }
    return (
        <Button type="primary" style={{ width: '80%' }} onClick={connect_to_spotify} ghost>
            Login
        </Button>
    )
}

export default Login