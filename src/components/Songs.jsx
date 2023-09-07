import { Col, Row } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Song from '../components/Song'
const Songs = () => {

    const [items, setItems] = useState([])
    const [getHistory,setgetHistory]=useState(false)
    
    const recently_played_url = 'https://api.spotify.com/v1/me/player/recently-played'

    const get_recently_played_songs = () => {
        axios.get(`${recently_played_url}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('user_token')}`,
            }
        }).then((response)=>{
            setgetHistory(true)
            console.log("Songs history is fetching...",response)
            const songsList=response.data.items;
            setItems([...songsList])
        }).catch((err)=>{
            console.log(err)
        })
        // if (response.status === 200) {
        //     //console.log(response)
        //     //setItems(response?.items)
        //     setgetHistory(true)
        // }
    }
    useEffect(() => {
        get_recently_played_songs()
    }, []);
    return (

        // {
        //     if(getHistory) {
        //         <div style={{ marginLeft: '15%', width: '80%', marginTop: '2vh' }}>
        //         <h1>Recently Played</h1>
        //         <Row>
        //         </Row>
        //     </div>
        //     }
        // }
        <div style={{marginLeft: '15%',display:'flex',flexDirection:'column',justifyContent:'center', justifyItems:'center'}}>
            <h1>Recently Played</h1>
            {items.map(song=>(<Song song={song}/>))}
        </div>
    )
}

export default Songs