import React from 'react'
import Widget from '../Widgets/Widget'
// import Widget from '../Widgets/Widget'
import './sidebar.css'
// import AvTimerIcon from '@mui/icons-material/AvTimer';
// import { FaHome } from 'react-icons/fa';




const SideBar = () => {
  return (
    <>
    <div className="sidebar">
        <div className="brand-logo">
            <h1>Dev Studio</h1>

        </div>

        {/* <Widget Icon = {FaHome}   name='Home' />
        <Widget Icon={AvTimerIcon}  name='Trends' />
        <Widget Icon={HomeIcon}  name='Feeds' /> */}

  <Widget />  
      
        
    </div>
   
    </>
  )
}

export default SideBar