import React, { use, useState } from 'react'

function Login() {

  const [email, setEmail] = useState('')
  const[password, setpassword] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log('email is  : ', email)
    console.log('password is  : ', password)
    
    setEmail('')
    setpassword('')

  }  

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className=' border-2 border-emerald-600 p-30 rounded-xl'>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }}  action="" className='flex flex-col items-center justify-center '>

          <input 
          value={email}
           onChange={(e)=>{
            setEmail(e.target.value)
          }}
          required className='border-2 border-emerald-600 rounded-full px-15 py-4 text-xl
           text-black outline-none bg-transparent placeholder:text-gray-400' type="email" placeholder='Enter your email ' />

          <input
          value={password}
           onChange={(e)=>{
            setpassword(e.target.value)
          }}
           className='border-2 border-emerald-600 rounded-full px-15 py-4 text-xl
           text-black outline-none bg-transparent placeholder:text-gray-400 mt-3' type="password" placeholder='Enter your password' />

          <button  className=' cursor-pointer border-2  rounded-3xl px-35 py-2 text-xl
           text-white outline-none bg-emerald-500 placeholder:text-white mt-2.5 border-none'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
