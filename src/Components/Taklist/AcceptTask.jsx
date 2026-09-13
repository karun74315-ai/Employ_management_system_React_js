import React from 'react'

const AcceptTask = () => {
  return (
    
      <div className=' shrink-0 h-full w-75 bg-orange-400 rounded-xl  p-5  '>
        <div className='flex items-center justify-between  text-sm '>
            <h3 className='bg-red-600 px-3 py-1 rounded '>High</h3>
            <h4 className='text-sm'>20 feb 2024</h4>
        </div>

        <h2 className='mt-5 text-2xl font-semibold'>Make a Project</h2>
        <p className='text-sm mt-5 '> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, consectetur autem! Temporibus 
          voluptate autem optio?</p>
          <div className='flex justify-between mt-4'>
            <button className='bg-green-400 py-1 px-2 text-sm'>Mark As Completed</button>
            <button className='bg-red-400 py-1 px-2 text-sm'>Mark as failed</button>
          </div>
     </div>
    
  )
}

export default AcceptTask
