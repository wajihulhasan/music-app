import { Col, Row } from 'antd'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Album from './Album'

const Albums = () => {
    const [albums, setAlbums] = useState([])
    const URL = 'https://api.spotify.com/v1/albums?ids=382ObEPsp2rxGrnsizN5TX%2C1A2GTWGtFfWp7KSQTwWOyo%2C2noRn2Aes5aoNVsU6iWThc'

    //get songs Albums
    const getAlbums = async () => {
        const response = await axios.get(`${URL}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        let albums_ = response.data.albums
        setAlbums([...albums_])
    }

    useEffect(() => {
        getAlbums()
    }, []);

    useEffect(() => {

    }, [albums]);
    return (
        <div>
            <div style={{  display: 'flex', justifyContent: 'space-between' }}>
                <h1 style={{paddingLeft:'4%'}} >Albums</h1>
                <p style={{ textAlign: 'center', paddingRight:'4%' }}>Show all</p>
            </div>
            <Row style={{ display: 'flex', justifyContent: 'space-around' }} >
                {albums?.map((album,index) => (<Album key={index} album={album} />))}
            </Row>
        </div>
    )
}

export default Albums