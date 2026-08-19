import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployDashboard from './Components/Dashboard/EmployDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'
import { Authcontext } from './Context/Authprovider'

const   App = ()=> {

const[user, setUser]  = useState(null)
const authdata = useContext(Authcontext)
// console.log(authdata)

useEffect(()=>{
  if(authdata){
    const loggedInUser = localStorage.getItem("loggedInUser")
     if(loggedInUser){
      setUser(loggedInUser.role)
     }

  }
},[authdata])

 const handleLogin = (email,password)=>{
      
      if(email==='admin@me.com' && password === "123"){
           setUser('admin')
           localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))

      }else if(authdata && authdata.employees.find((e) => e.email == email && e.password== password)){
        setUser('employees') 
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))

      }
      else{
        alert('invalid')
      }    
 }
  return (
    <>
     
    {
      !user ? ( <Login handleLogin={handleLogin} /> ) : (
        user == 'admin' ? <AdminDashboard /> : <EmployDashboard />
      )
    }
    
     
    </>
  )
}

export default App
