import React from 'react'
// import StateProvider from './utils/StateProvide'
import ReactDOM from 'react-dom/client'
import App from './App'
import { initialState } from './utils/Reducer'
import reducer from './utils/Reducer'
// import reducer, { initialState } from "./utils/Reducer";
import './index.css'
import StateProvider from './utils/StateProvide';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
)
