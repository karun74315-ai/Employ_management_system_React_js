import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

function AdminDashboard(props) {
  return (
    <div className='h-screen w-full py-7 text-black'>
      <Header changeUser={props.changeUser} data={props.data} />
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashboard
