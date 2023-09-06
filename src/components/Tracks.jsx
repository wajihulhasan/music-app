import React, { useState,useEffect } from 'react'
import Track from './Track'
import axios from 'axios'


const Tracks = () => {
    const[tracks,setTracks]=useState([])
    const URL = 'https://api.spotify.com/v1/tracks?ids=7ouMYWpwJ422jRcDASZB7P%2C4VqPOruhp5EdPBeR92t6lQ%2C2takcwOaAZWiXQijPHIx7B%2C3BJe4B8zGnqEdQPMvfVjuS%2C2nMeu6UenVvwUktBCpLMK9'

    //get tracks
    const getTracks = async () => {
        const response = await axios.get(`${URL}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        let tracks_ = response?.data?.tracks
        console.log(tracks)
        setTracks([...tracks_])   
    }

    useEffect(() => {
        getTracks()
    }, []);

    useEffect(() => {

    }, [tracks]);
  return (
    <div style={{backgroundColor:'#27272a'}}>
        
        {tracks?.map((track,index)=>(<Track key={index} track={track}/>))}
    </div>
  )
}

export default Tracks