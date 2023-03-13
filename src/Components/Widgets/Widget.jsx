import React from 'react'
import DisplayPlayList from './displayPlaylist'
import {AiFillHome} from 'react-icons/ai'

const Widget = () => {
  return (
    <> 
    
    <div className="widgets"> 
    <ul className='box'>
      <li className='active '>
        <AiFillHome className='bx-icon' />
         Home
      </li>
      <li>
        <AiFillHome className='bx-icon' />
         Trend
      </li>
      <li>
        <AiFillHome className='bx-icon' />
         Feed
      </li>
    </ul>
    
    </div>

    {/* Playlist Box */}
    <div>
         <div className="playlist-box">  
    <h3>PlayLists</h3>
    
<DisplayPlayList />

</div>
</div>

    </>
  )
}

export default Widget