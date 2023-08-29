import React, { useState,useEffect } from 'react'
import { getToken } from './api';
import HomeLayout from './layouts/HomeLayout';


function App() {
  const [token, setToken]=useState("")
  
  //set the token state
  const setTokenState=async()=>{
    const getTokenValue =await getToken();
    setToken(getTokenValue)
    console.log(getTokenValue)
  }

  useEffect(() => {
    setTokenState()
  }, []);


  return (
    <div className="App">
      <HomeLayout/>

    </div>
  );
}

export default App;
