import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import LoginUser from './LoginUser'

const Logout = () => {
    const navigate = useNavigate();
    const logout_from_spotify = () => {
        localStorage.removeItem('user_token')
        navigate('/')
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column'}}>
            <LoginUser />
            <Button type="primary" style={{ width: '80%',marginLeft:'8%' }} onClick={logout_from_spotify} ghost>
                Logout
            </Button>
        </div>
    )
}

export default Logout