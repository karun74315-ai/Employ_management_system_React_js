import React, { useContext } from 'react'
import { Authcontext } from '../../Context/Authprovider'

const AllTask = () => {
  const auth = useContext(Authcontext)
  
  return (
    <div id='alltsk' className='bg-[#1c1c1c] p-5 mt-5 rounded h-70 '>
       <div className='bg-gray-500 mb-2  py-2 px-4  flex justify-between rounded'>
        <h2 className='w-1/6 text-red-600'>Employee Name</h2>
        <h3 className='w-1/6 text-red-600'> New task</h3>
        <h5 className='w-1/6 text-red-600'>Active Task</h5>
        <h5 className='w-1/6 text-red-600'>Completed Task</h5>
        <h5 className='w-1/6 text-red-600'> Failed Task</h5>
      </div>
       <div className=' overflow-auto'>
        {auth.employees.map(function(e , idx){
         return   <div key = {idx} className='bg-amber-100-500 mb-2  py-2 px-4  flex justify-between rounded'>
        <h2 className='w-1/6 tex-green-600'>{e.firstName}</h2>
        <h3 className='w-1/6 text-yellow-400'> {e.taskCounts.newTask}</h3>
        <h5 className='w-1/6   text-blue-600'>{e.taskCounts.active}</h5>
        <h5 className='w-1/6 text-green-300'>{e.taskCounts.completed}</h5>
        <h5 className='w-1/6 text-red-600'> {e.taskCounts.failed}</h5>
      </div>
       })}
       </div>

      
       
    </div>
  )
}

export default AllTask
