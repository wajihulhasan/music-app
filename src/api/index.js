import axios from 'axios';
import { Buffer } from 'buffer';

  const URL="https://accounts.spotify.com/api/token"
  const clientId= process.env.REACT_APP_CLIENT_ID;
  const clientSecret= process.env.REACT_APP_CLIENT_SECRET;
  const authString = `${clientId}:${clientSecret}`;
//   const base64AuthString = btoa(authString);
const base64AuthString = (new Buffer.from(clientId + ':' + clientSecret).toString('base64'))
//   const requestData = 'grant_type=client_credentials';
const requestData = {
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: 'client_credentials'
}

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${base64AuthString}`
    }
};
export  const getToken=async()=>{
    let token = null;
    if(!!localStorage.getItem('token') || localStorage.getItem('token') !== ''){
        const response= await axios.post(URL,requestData,config)
        const data = await response.data
        console.log('from api',token)
        token = data.access_token;
        localStorage.setItem('token', data.access_token)
    } else {
        token = localStorage.getItem('token')
    }
    return token
}

