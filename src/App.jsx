import { useState,useEffect } from 'react'
import './App.css'
import LandingPage from './Components/LandingPage'

import { reducerCases } from "./utils/Constants";
import { useStateProvider } from "./utils/StateProvider";
import { Spotify } from './spotify'

function App() {


  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      if (token) {
        dispatch({ type: reducerCases.SET_TOKEN, token });
      }
    }
    document.title = "Spotify";
  }, [dispatch, token]);
  return <div>{token ?  <LandingPage /> : <Spotify />}</div>;

  // const [count, setCount] = useState(0)

  // return (
  //   <div className="App">

      
  //     <Spotify />                             
     {/* <LandingPage /> */}
    
    // </div>
  // )
}

export default App
