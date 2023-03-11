import React from 'react'
import {AiFillHome} from 'react-icons/ai'

const Widget = () => {
  return (
    <> 
    <div className="widgets">
    <div className='box active'>
      <AiFillHome className='bx-icon' />
      <h3> Home</h3>
    </div>
    <div className='box'>
      <AiFillHome className='bx-icon' />
      <h3> Trend</h3>
    </div>
    <div className='box'>
      <AiFillHome className='bx-icon' />
      <h3> Feed</h3>
    </div>
    </div>

    {/* Discover section  */}

    <div className="widgets">
      <h3>Discover</h3>
    <div className='box '>
      <AiFillHome className='bx-icon' />
      <h3> Home</h3>
    </div>
    <div className='box'>
      <AiFillHome className='bx-icon' />
      <h3> Trend</h3>
    </div>
    <div className='box'>
      <AiFillHome className='bx-icon' />
      <h3> Feed</h3>
    </div>
    </div>
    </>
  )
}

export default Widget