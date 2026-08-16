import React, { useEffect } from 'react'
import Login from './Components/Auth/Login'
import EmployDashboard from './Components/Dashboard/EmployDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'

function App() {
  useEffect(()=>{
    setLocalStorage()
    getLocalStorage()
  },)

  return (
    <>
     
     <Login />
     {/* <EmployDashboard /> */}
     {/* <AdminDashboard /> */}
    </>
  )
}

export default App
