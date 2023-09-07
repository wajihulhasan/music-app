import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Artist from './Artist'
import { Row } from 'antd'


const FollowedArtists = () => {

    const [artists, setArtists] = useState([])
    const Followed_Artists_Url = 'https://api.spotify.com/v1/me/following?type=artist&limit=50'
    
    //get followed artists list
    const get_followed_artists = async () => {
        const response = await axios.get(`${Followed_Artists_Url}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('user_token')}`
            }
        })
        if (response) {

            console.log(response)
            let artists_data = response.data.artists.items;
            console.log(artists)
            setArtists([...artists_data])
        }
    }

    useEffect(() => {
        get_followed_artists()

    }, []);
    useEffect(() => {

    }, [artists]);
    return (
        <div style={{marginLeft: '15%',display:'flex',flexDirection:'column',justifyContent:'center', justifyItems:'center'}}>
            <h1>Followed Artists</h1>
            <Row style={{ width: '80%', marginTop: '2vh' }} gutter={[16, 24]}>
                {artists?.map((artist, index) => (<Artist key={index} artist={artist} />))}
            </Row>
        </div>

    )
}

export default FollowedArtists