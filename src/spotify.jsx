import React from 'react'
import LandingPage from './Components/LandingPage';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
// react-router-dom
// import axios from 'axios';
import { useEffect, useState } from 'react';

export const Spotify = () => {
          
const  CLIENT_ID = "f3e7e045d3ab40b0b05a5f69fafb3dec";

const REDIRECT_URI = https://leinad-song.netlify.app/

const AUTH_ENDPOINT ='https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'token'
const scopes = [
    "user-read-currently-playing",
    "user-read-playback-state",
  ];


const [token, setToken] = useState("")


useEffect (() =>{
    const hash =window.location.hash
    let token =window.localStorage.getItem('token')

    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

        window.location.hash = ""
        window.localStorage.setItem("token", token)
    }


    setToken(token)

   
 
})
return (
    
    <div>

        <div>
           



            
            {
                   ! token? 
                        
                    <div>
                        {/* <button onClick={() => window.location.href = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${scopes.join("%20")}`}>
                            Login
                        </button> */}<h1>Spotify</h1>
                         <a href={AUTH_ENDPOINT + '?client_id=' + CLIENT_ID + '&redirect_uri=' + REDIRECT_URI + '&response_type=' + RESPONSE_TYPE}>Login</a>
                    </div> :
(
<LandingPage />)
                  
            }
           
        </div>
    </div>
)

}
