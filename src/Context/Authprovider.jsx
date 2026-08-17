import React, { createContext, useEffect } from 'react'
import { useState } from 'react'
import { getLocalStorage } from '../Utils/LocalStorage'

export const Authcontext  = createContext()

const Authprovider = ({children}) => {

const[userData, setUserData] = useState(null)

   useEffect(()=>{
    const {employees,admin} = getLocalStorage()
     setUserData({employees,admin})
   })
   
   

  return (
    <div>
      <Authcontext.Provider value={userData}>
         {children}
      </Authcontext.Provider>
    </div>
  )
}

export default Authprovider
