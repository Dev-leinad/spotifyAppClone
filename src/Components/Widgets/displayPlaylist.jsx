import React,{useEffect, useState} from 'react'
import {AiFillHome} from 'react-icons/ai'
import '../SidebarComponent/sidebar.css'
import axios from "axios";
import { reducerCases } from '../../utils/Constants';
import { useStateProvider } from '../../utils/StateProvide';

const DisplayPlayList = () => {

   const [{ token, playlists }, dispatch] = useStateProvider();
  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axios.get(
        "https://api.spotify.com/v1/me/playlists",
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const { items } = response.data;

      console.log(items)
      const playlists = items.map(({ name, id }) => {
        return { name, id };
      });
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
    };
    getPlaylistData();
  }, [token, dispatch]);
  const changeCurrentPlaylist = (selectedPlaylistId) => {
    dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId });
  };
  return (
   <>


   <ul>
      {playlists.map((playlist) => (
        <li key={playlist.id} onClick={() => changeCurrentPlaylist(playlist.id)}>
            {playlist.name}
         
        </li>
      ))}
      
    </ul>
   </>
   
      
  )
}

export default DisplayPlayList
