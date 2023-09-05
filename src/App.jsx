import React, { useState, useEffect } from 'react'
import { getToken } from './api';
import HomeLayout from './layouts/HomeLayout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Artists from './components/Artists';
import Albums from './components/Albums';
import Categories from './components/Categories';
import Profile from './components/Profile';
import Searchspotify from './components/Searchspotify';

function App() {
  const [token, setToken] = useState("")

  //set the token state
  const setTokenState = async () => {
    const getTokenValue = await getToken();
    setToken(getTokenValue)
    localStorage.setItem('token',getTokenValue);
  }

  useEffect(() => {
    const hash= window.location.hash;
    if(hash)
    {
      const token = hash.substring(1).split('&')[0].split('=')[1];

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
            <Route path='/search' element={<Searchspotify/>}/>
          </Routes>
      </HomeLayout>
    </div>
  );
}

export default App;
