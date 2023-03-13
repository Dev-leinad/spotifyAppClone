import React, {useState, useEffect} from 'react'

const MusicPlaylist = () => {

    let token =''
    const [playlist, setPlaylist] = useState(null)
    // const [isPlaying, setIsPlaying] = useState(true)
    const SPOTIFY_API_URL = 'https://api.spotify.com/v1';

    useEffect(() => {
        const getToken = localStorage.getItem('token')
        token = getToken
        console.log(token)
    }, [])

    const [tracks, setTracks] =useState(null)

//    const getPlaylist = 
  useEffect (() => {
        fetch(`${SPOTIFY_API_URL}/me/playlists/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',      
                'Authorization': `Bearer ${token}`
            }
        })
          .then(res => res.json())
          .then(data => {
            const playlists = data.items
            playlists.map(a =>{
              setTracks(a.tracks) 
              console.log(a.tracks)});
                // console.log(data.items )
                
                
            })
          .catch(err => {
                console.log(err)
            })
    },[])

    const getSong = (data) =>
    {
        console.log(data)
    }

  return (

    
    <>

    </>
  )
}

export default MusicPlaylist