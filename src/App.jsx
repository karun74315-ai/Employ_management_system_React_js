import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployDashboard from './Components/Dashboard/EmployDashboard'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { Authcontext } from './Context/Authprovider'

const   App = ()=> {

const[user, setUser]  = useState(null)
const[loggedInUserData, setloggedInUserData] = useState(null)
const authdata = useContext(Authcontext)

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
      
      if(email==='admin@example.com' && password === "123"){
           setUser({role:'admin'})
         const admin = authdata?.admin?.[0]
         setloggedInUserData(admin)
         localStorage.setItem('loggedInUser',JSON.stringify({role:'admin', data:admin}))

      }else if(authdata?.employees){
        const employee = authdata.employees.find((e) => e.email === email && e.password === password)
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
