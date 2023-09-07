import axios from 'axios';
import React, { useEffect, useState } from 'react';


const playback_url = "";

function WebPlayback(props) {

    const [object_id, setObject_id] = useState()

    const playback_url = 'https://api.spotify.com/v1/me/player'

    const get_user_playback = async () => {
        const response = await axios.get(`${playback_url}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('user_token')}`
            }
        })
        if (response.status === 200) {
            //console.log(response.data.device.id)
            let deviceInfo = response.data.device;
            setObject_id(deviceInfo.id);
            localStorage.setItem('device_id',`${deviceInfo.id}`)
        }
    }

    useEffect(() => {
        get_user_playback()
    }, []);
    useEffect(() => {

    }, [object_id]);
    return (
        <>
        {/* <Songs/> */}
        </>
    )
}

export default WebPlayback
