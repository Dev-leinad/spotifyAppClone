import React from 'react'
import './main.css'
import PlayingComponent from './PlayingComponent/PlayingComponent'
import Playlist from './Playlist/Playlist'
import Search from './SearchComponents/Search'
import TrendComponents from './TrendingComponent/TrendComponents'

const Main = () => {
  return (
    <>
    <div className="main">
      <Search />
       <TrendComponents />
       <Playlist />
       <PlayingComponent />
    </div>
    
    </>
  )
}

export default Main

