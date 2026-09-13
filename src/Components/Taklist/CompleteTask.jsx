import React from 'react'

const CompleteTask = () => {
  return (
   
    <div className=' shrink-0 h-full w-75 bg-red-400 rounded-xl  p-5  '>
        <div className='flex items-center justify-between  text-sm '>
            <h3 className='bg-red-600 px-3 py-1 rounded '>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
        </div>

        <h2 className='mt-5 text-2xl font-semibold'>Make a Project</h2>
        <p className='text-sm mt-5 '> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           Eum, consectetur autem! Temporibus voluptate autem optio?</p>
           <div className='mt-4'>
            <button className='bg-green-400 py-1 px-2 text-sm w-full'>
              Task Completed
            </button>
          </div>
     </div>
           
  )
}

export default CompleteTask
