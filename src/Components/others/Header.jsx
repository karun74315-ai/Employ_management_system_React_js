import React, { useState } from 'react'
import { setLocalStorage } from '../../Utils/LocalStorage'

const Header = ({data})=> {
  
  const logout = ()=>{
  localStorage.setItem('LoggedInUser', '')
  window.location.reload()
  }
  return (
    <div className='flex items-end justify-between'>
      
    <h1 className='text-2xl font-medium text-white'>Hello <br /> 
    
    <span className='text-3xl font-semibold'> {data?.firstName ?? 'User'} </span> </h1>

    <button 
        onClick={()=>{
           logout()
        }}
    className='bg-red-600 text-lg font-medium text-white px-5 py -2 rounded-sm '> 
        Log out
        </button>

    </div>
  )
}

export default Header
