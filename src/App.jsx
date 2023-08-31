import React, { useState, useEffect } from 'react'
import { getToken } from './api';
import HomeLayout from './layouts/HomeLayout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Artists from './components/Artists';
import Albums from './components/Albums';

function App() {
  const [token, setToken] = useState("")

  //set the token state
  const setTokenState = async () => {
    const getTokenValue = await getToken();
    setToken(getTokenValue)
    console.log(getTokenValue)
    localStorage.setItem('token',getTokenValue);
  }

  useEffect(() => {
    setTokenState()
  }, []);


  return (
    <div className="App">
      <HomeLayout>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/library' element={<Artists/>}/>
          </Routes>
      </HomeLayout>
    </div>
  );
}

export default App;




