import React from 'react'
import LandingPage from './Components/LandingPage';


import MusicPlaylist from './Playlistts/MusicPlaylist'
import {
    createBrowserRouter,
    redirect,
    RouterProvider,
  } from "react-router-dom";
import { useEffect, useState } from 'react';

export const Spotify = () => {
    const handleClick = async() =>{
        const client_id = "f3e7e045d3ab40b0b05a5f69fafb3dec";
        const redirect_uri = "http://localhost:5173/";
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
   
 


return (
    <>
     <div className='login-cont'>
        <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png"
        alt="spotify"
      />
     <button onClick={handleClick}>Connect Spotify</button>
      
    </div>
    </>
   
)
 }

