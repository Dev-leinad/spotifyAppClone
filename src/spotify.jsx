import React from 'react'
import LandingPage from './Components/LandingPage';


import MusicPlaylist from './Playlistts/MusicPlaylist'
import {
    createBrowserRouter,
    redirect,
    RouterProvider,
  } from "react-router-dom";
// react-router-dom
// import axios from 'axios';
import { useEffect, useState } from 'react';

export const Spotify = () => {
    const handleClick = async() =>{
        const client_id = "f3e7e045d3ab40b0b05a5f69fafb3dec";
        const redirect_uri = "https://leinad-song.netlify.app/";
        const api_uri = "https://accounts.spotify.com/authorize";
        const scope = [
          "user-read-private",
          "user-read-email",
          "user-modify-playback-state",
          "user-read-playback-state",
          "user-read-currently-playing",
          "user-read-recently-played",
          "user-top-read",
        ];
        window.location.href = `${api_uri}?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope.join(
          " "
        )}&response_type=token&show_dialog=true`;
      };
   
          
// const  CLIENT_ID = "f3e7e045d3ab40b0b05a5f69fafb3dec";

// const REDIRECT_URI = 'http://localhost:5173/'

// const AUTH_ENDPOINT ='https://accounts.spotify.com/authorize';
// const RESPONSE_TYPE = 'token'
// const scopes = [
//     "user-read-playback-state",
// "user-modify-playback-state",
// "user-read-currently-playing",
// "user-read-playback-position",
// "user-top-read",
// "user-read-recently-played"
//   ];
 
//   window.location.href=${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect=${};

  

// const [token, setToken] = useState("")


// useEffect (() =>{
//     const hash =window.location.hash
//     let token =window.localStorage.getItem('token')

//     if (!token && hash) {
//         token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

//         window.location.hash = ""
//         window.localStorage.setItem("token", token)
//     }


//     setToken(token)

   

// })
return (
    
    <div>
        <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
        alt="spotify"
      />
     <button onClick={handleClick}>Connect Spotify</button>
      
    </div>
)
 }


// export default Spotify