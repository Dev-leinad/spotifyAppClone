import React from "react";
import "./playing.css";
import { CgPlayBackwards, CgPlayForwards } from "react-icons/cg";
import { BsHeart, BsVolumeDown, BsVolumeUp } from "react-icons/bs";
import { CiShuffle } from "react-icons/ci";
import { FiMusic } from "react-icons/fi";
import { AiOutlineArrowsAlt } from "react-icons/ai";

import { BsPauseCircleFill, BsPlayCircleFill } from "react-icons/bs";

const PlayingComponent = () => {
  return (
    <>
      <div className="controls-container">
        <div className="top-buttons-control">
          <div className="left-controls">
            <BsHeart />
            <FiMusic />
            <AiOutlineArrowsAlt />
          </div>

          <div className="middle-cont-btn">
            <CiShuffle />
            <CgPlayBackwards />
            <BsPlayCircleFill className="play-btn" />
            <CgPlayForwards />
            <CiShuffle />
          </div>

          <div className="right-control-btn">
            <BsVolumeDown />

            <div className="control-range">
              <div className="line"></div>
            </div>
            <BsVolumeUp />
          </div>
        </div>

        <div className="song-dura-cont">
          <div className="track-start">
            <p>0:32</p>
          </div>

          <div className="track-rang ">
            <div className="line"></div>
          </div>
          <div className="track-end">
            <p>02:45</p>
          </div>


        </div>
      </div>
    </>
  );
};

export default PlayingComponent;
