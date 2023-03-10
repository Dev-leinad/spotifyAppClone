import React from 'react'
import './rightside.css'
import {BiDotsHorizontalRounded} from 'react-icons/bi' 

const Rightside = () => {
  return (
    <>
<div className="rightside">
  <div className="topcont">
    <h2>Shortcut</h2>
    <div className="side-boxes">
      <div className="side-box-cont">
        <div className="emoji">
          ❄️
        </div>
        <p>Chill Hits</p>
      </div>
      <div className="side-box-cont">
        <div className="emoji">

          🌟
        </div>
        <p>Hop</p>
      </div>
      <div className="side-box-cont">
        <div className="emoji">
          🎸
        </div>
        <p>Accoustic</p>
      </div>
      <div className="side-box-cont">
        <div className="emoji">
          🎵
        </div>
        <p>Indie Pop</p>
      </div>
      <div className="side-box-cont">
        <div className="emoji">
         🎹 
        </div>
        <p>Piano Blue</p>
      </div>
      <div className="side-box-cont">
        <div className="emoji">
          🎺
        </div>
        <p>Jazz</p>
      </div>
    </div>

  </div>

  <div className="fav-artist-container">
    <h3>Fav Artist</h3>

    <div className="fav-cont">
      <div className="fav-right-col">
        <div className="prof">
          <img src="https://images.pexels.com/photos/15764531/pexels-photo-15764531.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        </div>
        <div className="fav-bio">
          <h4>Taylor Smith</h4>
          <p>189 songs in library</p>
        </div>
      </div>
      <div className="fav-left-col">
        <BiDotsHorizontalRounded/>
      </div>
    </div>
    <div className="fav-cont">
      <div className="fav-right-col">
        <div className="prof">
          <img src="https://images.pexels.com/photos/15764531/pexels-photo-15764531.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        </div>
        <div className="fav-bio">
          <h4>Taylor Smith</h4>
          <p>189 songs in library</p>
        </div>
      </div>
      <div className="fav-left-col">
        <BiDotsHorizontalRounded/>
      </div>
    </div>
    <div className="fav-cont">
      <div className="fav-right-col">
        <div className="prof">
          <img src="https://images.pexels.com/photos/15764531/pexels-photo-15764531.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        </div>
        <div className="fav-bio">
          <h4>Taylor Smith</h4>
          <p>189 songs in library</p>
        </div>
      </div>
      <div className="fav-left-col">
        <BiDotsHorizontalRounded/>
      </div>
    </div>
  </div>
</div>
    
    </>
  )
}

export default Rightside