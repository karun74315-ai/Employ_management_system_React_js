import React from 'react'

const CreateTask = () => {
  return (
    <div>
      
      <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form action="" className='flex flex-wrap items-start justify-between w-full  '>
          <div className='w-1/2 '>

            <div>
          <h3 className='text-sm text-gray-300 nb-0.5'>Task Title</h3>
          <input type="text " placeholder='Make a UI design' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
          </div>

            <div>
            <h3 className='text-sm text-gray-300 nb-0.5'>Date</h3>
          <input type="date" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'/>
          </div>

          <div>
            <h3 className='text-sm text-gray-300 nb-0.5'>Assign to</h3>
          <input type="text" placeholder='Employee name'className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 nb-0.5'>Categoery</h3>
          <input type="text " placeholder='Design / Dev / etc' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
          </div>

          </div>
          

          <div className='w-2/5 flex flex-col items-start'>
            <h3 className='text-sm text-gray-300 nb-0.5'>Discription</h3>
          <textarea name="" id="" className='w-full h-44  text-sm py-2 px-4 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'>

          </textarea>
          <button className='bg-emerald-500 py-3 hover:bg-emerald-700 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
          </div >

          
          
          
        </form>
      </div>
      
    </div>
  )
}

export default CreateTask
