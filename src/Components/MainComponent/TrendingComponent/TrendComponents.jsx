import React from 'react'
import './trend.css'
// import {RxCaretRight }from 'react-icons/Fa'

const TrendComponents = () => {
  return (
    <>
    <div className="trend_cont" >
        <div className="trend_head">
            <div>
              <h4>What's hot 💥</h4>
            <h1>Trending</h1>  
            </div>
            <button>More</button>
            
        </div>
        <div className="trend-card">
          <div className="trend-card-cont">
             <h4>Artist</h4>
            <h2>On Top <br /> Of The World </h2>
            <button className='play-btn'>Play</button>
            <button>Follow</button>
          </div>

        </div>
    </div>
    </>
  )
}

export default TrendComponents