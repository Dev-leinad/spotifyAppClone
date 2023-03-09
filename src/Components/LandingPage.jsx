import React from 'react'
import Main from './MainComponent/Main'
import Rightside from './RightSidebarComponent/Rightside'
import SideBar from './SidebarComponent/SideBar'

const LandingPage = () => {
  return (
    <>
    <div className="container">
        <SideBar />
        <Main />
        <Rightside />
    </div>

    </>
  )
}

export default LandingPage