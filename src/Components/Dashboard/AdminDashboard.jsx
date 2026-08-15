import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

function AdminDashboard() {
  return (
    <div className='h-screen w-full py-7 text-black'>
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashboard
