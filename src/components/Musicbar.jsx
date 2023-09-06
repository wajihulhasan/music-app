import axios from 'axios';
import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


const Musicbar = () => {

    const song_url = 'https://api.spotify.com/v1/me/player/currently-playing';
    const playtrack = async () => {
        const response = await axios.put(`${song_url}`,
            {

                context_uri: "spotify:album:5ht7ItJgpBH7W6vJ5BqpPr",
                offset: {
                    position: 5
                },
                position_ms: 0
            },
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('user_token')}`,
                    'Content-Type': 'application/json'
                }
            })
        if (response.status === 200) {
            console.log()
        }
        console.log(response)
    }
    return (
        <div>
            <AudioPlayer
                //autoPlay
                src="http://example.com/audio.mp3"
                onPlay={e =>{ console.log("onPlay")}}
            // other props here
            />
        </div>
    )
}

export default Musicbar