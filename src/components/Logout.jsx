import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import UserInfo from './UserInfo'

const Logout = () => {
    const navigate = useNavigate();
    const logout_from_spotify = () => {
        localStorage.removeItem('user_token')
        navigate('/')
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column'}}>
            <UserInfo />
            <Button type="primary" style={{ width: '80%' }} onClick={logout_from_spotify} ghost>
                Logout
            </Button>
        </div>
    )
}

export default Logout