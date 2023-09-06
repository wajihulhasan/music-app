import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


const Musicbar = () => {


    return (
        <div>
            <AudioPlayer
                autoPlay
                src="http://res.cloudinary.com/alick/video/upload/v1502689683/Luis_Fonsi_-_Despacito_ft._Daddy_Yankee_uyvqw9.mp3"
                onPlay={e => console.log("onPlay")}
            // other props here
            />
        </div>
    )
} 

export default Musicbar