import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployDashboard from './Components/Dashboard/EmployDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { Authcontext } from './Context/Authprovider'

const   App = ()=> {

const[user, setUser]  = useState(null)
const[loggedInUserData, setloggedInUserData] = useState(null)
const [authdata, setUserData] = useContext(Authcontext)

useEffect(()=>{
  const LoggedInUser = localStorage.getItem('loggedInUser')
  //  console.log(LoggedInUser)
  if(LoggedInUser){
    // console.log("user logged in")

    const UserData = JSON.parse(LoggedInUser)
    setUser({role: UserData.role})
    setloggedInUserData(UserData.data)
    // console.log(UserData)
  }
},[])

// console.log(authdata)

// useEffect(()=>{
//   if(authdata){
//     const loggedInUser = localStorage.getItem("loggedInUser")
//      if(loggedInUser){
//       setUser(loggedInUser.role)
//      }

//   }
// },[authdata])

 const handleLogin = (email,password)=>{
      const normalizedEmail = email.trim().toLowerCase()
      
      if(normalizedEmail==='admin@example.com' && password === "123"){
           setUser({role:'admin'})
         const admin = {
           firstName: 'Boss',
           email: 'admin@example.com',
           role: 'admin'
         }
         setloggedInUserData(admin)
         localStorage.setItem('loggedInUser',JSON.stringify({role:'admin', data:admin}))

      }else if(Array.isArray(authdata)){
        const employee = authdata.find((e) => e.email.toLowerCase() === normalizedEmail && e.password === password)
        if(employee){
          setUser({role:'employee'})
          setloggedInUserData(employee)
          localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data:employee}))
        } else {
          alert('Invalid email or password')
        }
      }
      else{
        alert('Invalid email or password')
      }    
 }
  return (
    <>
     
    {
      !user ? ( <Login handleLogin={handleLogin} /> ) : (
        user.role === 'admin' ? <AdminDashboard changeUser={setUser} data={loggedInUserData} /> : <EmployDashboard changeUser={setUser} data={loggedInUserData}  />
      )
    }

    </>
  )
}

export default App
