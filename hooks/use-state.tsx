"use client"

import { createContext, useContext, useState } from "react"

const Context = createContext<any>(null)
export const StateContext = ({ children }:any) => {
    const [showMenu,setShowMenu] =useState(false)
    
  
  
  return (
    <Context.Provider
      value={{
        showMenu,setShowMenu
      }}
    >
      {children}
    </Context.Provider>
  )
  
  
  
  
  
  
  }
  
  
  export const useStateContext = () => useContext(Context)

