import React from 'react'
import Login from './Components/Auth/Login'
import EmployDashboard from './Components/Dashboard/EmployDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'

function App() {
  return (
    <>
     
     {/* <Login /> */}
     <EmployDashboard />
     <AdminDashboard />
    </>
  )
}

export default App
