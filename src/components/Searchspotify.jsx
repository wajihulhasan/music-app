import axios from 'axios'
import React, { useEffect } from 'react'


const Searchspotify = (props) => {
    let search_query ="comfortably numb" //props.searchItem.split(' ').join('+');
    search_query=search_query.split(' ').join('+')
    console.log("search query is: ",search_query)
    let type="track"
    
    const search_url=`https://api.spotify.com/v1/search?q=${search_query}&type=${type}`

    const get_serach_item=async()=>{
        const response = await axios.get(`${search_url}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
        if(response){
            console.log(response)
        }
    }

    useEffect(() => {
        get_serach_item()
    }, []);
  return (
    <div>Searchspotify</div>
  )
}

export default Searchspotify