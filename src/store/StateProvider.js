import React, { createContext, useContext, useReducer } from "react";

//Data layer
export const StateContext = createContext();

//Provider => This provider wraps App.js in index.js, which means {children} is referring to <App.js> in this case 
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}    
    </StateContext.Provider>
)

//This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);