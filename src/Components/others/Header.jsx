import React from 'react'

const Header = ({ data, changeUser })=> {
  
  const logout = ()=>{
    localStorage.removeItem('loggedInUser')
    changeUser?.(null)
  }

  const userName = data?.firstName ?? data?.email ?? 'User'

  return (
    <div className='flex items-end justify-between'>
      
    <h1 className='text-2xl font-medium text-white'>Hello <br /> 
    
    <span className='text-3xl font-semibold'> {userName} </span> </h1>

    <button 
        onClick={logout}
      className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'> 
        Log out
        </button>

    </div>
  )
}

export default Header
