import React from 'react'
import './search.css'
import { FaSistrix, FaMediumM } from 'react-icons/fa';


const Search = () => {
  return (
    <>
    
        <form action="#">
            <div className="form-cont" >
            <FaSistrix className='search-icon' />
                <input type="text " placeholder='search for artists, songs and ...' />
            </div>
            
        </form>
    </>
  )
}

export default Search