import React from 'react'
import './playlist.css'
import axios from 'axios';

const Playlist = () => {
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