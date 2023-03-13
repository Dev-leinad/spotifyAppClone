import React, {useEffect, useState} from 'react'
import './playlist.css'
import axios from "axios";
import { reducerCases } from '../../../utils/Constants';
import { useStateProvider } from '../../../utils/StateProvide';


const Playlist = () => {
  const [{ token, selectedPlaylist, selectedPlaylistId }, dispatch] =
    useStateProvider();

  useEffect(() => {
    const getInitialPlaylist = async () => {
      const response = await axios.get(
        `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      const selectedPlaylist = {
        id: response.data.id,
        name: response.data.name,
        description: response.data.description.startsWith("<a")
          ? ""
          : response.data.description,
        image: response.data.images[0].url,
        tracks: response.data.tracks.items.map(({ track }) => ({
          id: track.id,
          name: track.name,
          artists: track.artists.map((artist) => artist.name),
          image: track.album.images[2].url,
          duration: track.duration_ms,
          album: track.album.name,
          context_uri: track.album.uri,
          track_number: track.track_number,
        })),
      };
      dispatch({ type: reducerCases.SET_PLAYLIST, selectedPlaylist });
    };
    getInitialPlaylist();
  }, [token, dispatch, selectedPlaylistId]);
  const playTrack = async (
    id,
    name,
    artists,
    image,
    context_uri,
    track_number
  ) => {
    const response = await axios.put(
      `https://api.spotify.com/v1/me/player/play`,
      {
        context_uri,
        offset: {
          position: track_number - 1,
        },
        position_ms: 0,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    if (response.status === 204) {
      const currentPlaying = {
        id,
        name,
        artists,
        image,
      };
      dispatch({ type: reducerCases.SET_PLAYING, currentPlaying });
      dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: true });
    } else {
      dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: true });
    }
  };
  const msToMinutesAndSeconds = (ms) => {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }
  return (
    <>
    <div className="playlist-cont">
      <div className="playlist-head">
        <h2>My Playlist</h2>
        <button>Show All</button>
      </div>
      <div >

    <table>
      <thead>
        <tr>
          <th className='ser-num'>#</th>
          <th>Title</th>
          <th>Artist</th>
          <th className='song-time'>Time</th>
          <th>Album</th>
        </tr>
      </thead>
      <tbody >
        {/* {
          data.map((song, index)=>{
            
          })
        } */}

        <tr className='tab-row'>
          
          <td className='s-num'>01</td>
          <td className='song-title' >priority</td>
          <td className='song-artist'>Mos Def </td>
          <td className='song-duration'>1:23</td>
          <td className='song-album'>The Escaltic </td>
        </tr>
      
        <tr className='tab-row .active'>
          <td>02</td>
          <td>priority</td>
          <td>Mos Def </td>
          <td>1:23</td>
          <td>The Escaltic </td>
        </tr>
      
        <tr className='tab-row'>
          <td>03</td>
          <td>priority</td>
          <td>Mos Def </td>
          <td>1:23</td>
          <td>The Escaltic </td>
        </tr>
      
      
      
      </tbody>
    </table>
 

      </div>
    </div>

    </>
  )
}

export default Playlist