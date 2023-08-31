import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Artist from './Artist'
import { Col, Row, Space } from 'antd'

const Artists = () => {
    const [artists, setArtists] = useState([])
    const URL = 'https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx%2C00FQb4jTyendYWaN8pK0wa%2C1vCWHaC5f2uS3yhpwWbIA6%2C4gzpq5DPGxSnKTe4SA8HAU%2C0YC192cP3KPCRWx8zr8MfZ%2C3atMq790wQ7IqjeSO0HFeP%2C0k17h0D3J5VfsdmQ1iZtE9%2C2ye2Wgw4gimLv2eAKyk1NB%2C06HL4z0CvFAxyc27GXpf02'
    //getArtists
    const getArtists = async () => {
        const response = await axios.get(`${URL}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        let getartists = response.data.artists
        console.log(getartists)
        setArtists([...getartists])
    }

    const style = {
        background: '#0092ff',
        padding: '8px 0',
    };


    useEffect(() => {
        getArtists()
    }, []);

    //artists state change
    useEffect(() => {

    }, [artists]);
    return (
        <Row style={{ marginLeft: '15%', width: '80%', marginTop: '2vh' }} gutter={[16, 24]}>
            {artists?.map(artist => (<Artist artist={artist} />))}

        </Row>

        // <Row gutter={[4,4]} style={{display:'flex', flexWrap: 'wrap'}}><Space>{artists?.map((artist,index)=><Artist key={index} artist={artist}/>)}</Space></Row>
    )

}

export default Artists





