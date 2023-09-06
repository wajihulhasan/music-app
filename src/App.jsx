import React, { useState, useEffect } from 'react'
import { getToken } from './api';
import HomeLayout from './layouts/HomeLayout';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Artists from './components/Artists';
import Albums from './components/Albums';
import Categories from './components/Categories';
import Profile from './components/Profile';
import Searchspotify from './components/Searchspotify';
import WebPlayback from './components/WebPlayback';

function App() {
  const [token, setToken] = useState("")
  const navigate=useNavigate()
  //set the token state
  const setTokenState = async () => {
    const getTokenValue = await getToken();
    setToken(getTokenValue)
    localStorage.setItem('token',getTokenValue);
  }

  useEffect(() => {
    //debugger
    const hash= window.location.hash;
    if(hash)
    {
      const hash = window.location.hash;
        //debugger
        if (hash) {
            console.log("Hash value is :: ", hash)
            const token = hash.substring(1).split('&')[0].split('=')[1];
            localStorage.setItem('user_token', token)
            //setLoginToken(token)
            navigate('/')
        }

    }
    setTokenState()
  }, []);


  return (
    <div className="App" >
      <HomeLayout >
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/library' element={<Artists/>}/>
            <Route path='/categories' element={<Categories/>}/>
             {localStorage.getItem("user_token")&&<Route path='/profile' element={<Profile/>}/>}
             {localStorage.getItem("user_token")&&<Route path='/webplayback' element={<WebPlayback token={localStorage.getItem("user_token")}/>}/>}
            <Route path='/search' element={<Searchspotify/>}/>
          </Routes>
      </HomeLayout>
    </div>
  );
}

export default App;
