import React from 'react'
// import axios from 'axios';
import { useEffect, useState } from 'react';

export const Spotify = () => {
          
const  CLIENT_ID = "f3e7e045d3ab40b0b05a5f69fafb3dec";

const REDIRECT_URI = 'http://localhost:5173/'

const AUTH_ENDPOINT ='https://accounts.spotify.com/authorize';
const RESPONSE_TYPE = 'token'


const [token, setToken] = useState("")

useEffect (() =>{
    const hash =window.location.hash
    let token =window.localStorage.getItem('token')

    if(!token && hash ){
        token = hash.substring(1).split('&').find(item=> item.startsWith('access_token ')).split('=')[1]
        window.location.hash = ''
        window.localstorage.setItem('token', token)


    }

})

}
