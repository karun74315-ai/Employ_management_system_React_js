import React from 'react'

const AcceptTask = ({data}) => {
  return (
    
      <div className=' shrink-0 h-full w-75 bg-orange-400 rounded-xl  p-5  '>
        <div className='flex items-center justify-between  text-sm '>
            <h3 className='bg-red-600 px-3 py-1 rounded '>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
        </div>

        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-5 '> {data.taskDescription}</p>
          <div className='flex justify-between mt-4'>
            <button className='bg-green-400 py-1 px-2 text-sm'>Mark As Completed</button>
            <button className='bg-red-400 py-1 px-2 text-sm'>Mark as failed</button>
          </div>
     </div>
    
  )
}

export default AcceptTask
