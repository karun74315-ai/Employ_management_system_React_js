import React from 'react'
import Header from '../others/Header'
import Task from '../others/Task'
import TaskList from '../Taklist/TaskList'

const EmployDashboard = ({data})=> {
// console.log()
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen '>
      {/* <h1>{data.id}</h1> */}
      <Header data={data} />
      <Task  data = {data}/>
      <TaskList data = {data}  />
    </div>
  )
}

export default EmployDashboard
