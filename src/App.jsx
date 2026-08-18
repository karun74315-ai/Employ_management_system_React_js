import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployDashboard from './Components/Dashboard/EmployDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'
import { Authcontext } from './Context/Authprovider'

const   App = ()=> {

const[user, setUser]  = useState(null)
const authdata = useContext(Authcontext)
console.log(authdata)

 const handleLogin = (email,password)=>{
      
      if(email=='admin@me.com' && password == 123){
           setUser('admin')
      }else if(authdata && authdata.emmployees.find((e)=>{})){
        setUser('employee') 
      }
      else{
        alert('invalid')
      }    
 }
  return (
    <>
     
    {
      !user?  <Login handleLogin={handleLogin} />:''
    }
    { user == 'admin' ? <AdminDashboard /> : <EmployDashboard />}
     
    </>
  )
}

export default App
