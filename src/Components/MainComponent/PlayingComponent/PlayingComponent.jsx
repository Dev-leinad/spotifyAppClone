import React from "react";
import "./playing.css";
import {CgPlayBackwards, CgPlayForwards} from 'react-icons/cg'
import {BsHeart, BsVolumeDown, BsVolumeUp} from 'react-icons/bs'
import {CiShuffle} from 'react-icons/ci'
import {FiMusic } from 'react-icons/fi'
import {AiOutlineArrowsAlt} from 'react-icons/ai'

import {BsPauseCircleFill, BsPlayCircleFill} from 'react-icons/bs'

const PlayingComponent = () => {
  return (
    <>
      <div className="playingcont">
        <div className="control-cont">
          <div className="fav-option">
            <BsHeart className="ctl-icon" />
            <FiMusic className="ctl-icon"/>
            <AiOutlineArrowsAlt className="ctl-icon" />
          </div>
          <div className="play-controls">
            <CiShuffle className="ctl-icon" />
            <CgPlayBackwards className="ctl-icon" />
                <BsPauseCircleFill className="ctl-icon" />  
            <CgPlayForwards className="ctl-icon" />
          </div>
          <div className="volume-opt">
            <BsVolumeDown  className="ctl-icon"/>
            <div className="vol-range">
                <div className="vol-line line"></div>
            </div>
            <BsVolumeUp className="ctl-icon" />

          </div>

          
        </div>
        <div className="track-duration">
            <p className="start-time">0:21</p>
            <div className="dur-cont">
                <div className="line track-line"></div>
                
            </div>
            <p className="end-time">3:43</p>
          </div>
      </div>
    </>
  );
};

export default PlayingComponent;
