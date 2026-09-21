import React, { createContext, useEffect } from 'react'
import { useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../Utils/LocalStorage'

export const Authcontext  = createContext()

const Authprovider = ({children}) => {
const[UserData, setUserData] = useState(null)

   useEffect(()=>{
    setLocalStorage()
    const {employees,admin} = getLocalStorage()
     setUserData({employees,admin})
   },[])
   
   

  return (
    <div>
      <Authcontext.Provider value={UserData}>
         {children}
      </Authcontext.Provider>
    </div>
  )
}

export default Authprovider
