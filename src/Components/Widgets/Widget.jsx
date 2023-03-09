import React from 'react'
import {AiFillHome} from 'react-icons/ai'

const Widget = () => {
  return (
    <>
    <div className="widgets">
    <div>
      <AiFillHome />
      <p> Home</p>
    </div>
    <div>
      <AiFillHome />
      <p> Trends</p>
    </div>
    <div>
      <AiFillHome />
      <p> Feed</p>
    </div>
    </div>

    </>
  )
}

export default Widget