import axios from 'axios';

  const URL="https://accounts.spotify.com/api/token"
  const clientId= process.env.REACT_APP_CLIENT_ID;
  const clientSecret= process.env.REACT_APP_CLIENT_SECRET;
  const authString = `${clientId}:${clientSecret}`;
  const base64AuthString = btoa(authString);
  const requestData = 'grant_type=client_credentials';

const config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': `Basic ${base64AuthString}`
    }
};
export  const getToken=async()=>{
    const response= await axios.post(URL,requestData,config)
    const data = await response.data
    const token = data.access_token
    //console.log(token)
    return token
}

