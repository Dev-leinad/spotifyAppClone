import react, { createContext, useContext, useReducer } from "react";

 const StateContext = createContext();

 const StateProvider = ({ initialState, reducer, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export default StateProvider
export const useStateProvider = () => useContext(StateContext);
