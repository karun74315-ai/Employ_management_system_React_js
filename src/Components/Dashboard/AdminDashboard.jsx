import React from 'react'
import Header from '../others/Header'

function AdminDashboard() {
  return (
    <div className='h-screen w-full p-10 text-black'>
      <Header />

      <div>
        <form action="" className='flex flex-wrap items-start justify-between w-full bg-amber-700 '>
          <div className='w-1/2 '>

            <div>
          <h3>Task Title</h3>
          <input type="text " placeholder='Make a UI design' />
          </div>

            <div>
            <h3>Date</h3>
          <input type="date" />
          </div>

          <div>
            <h3>Assign to</h3>
          <input type="text" placeholder='Employee name' />
          </div>

          <div>
            <h3>Categoery</h3>
          <input type="text " placeholder='Design / Dev / etc' />
          </div>

          </div>
          

          <div className='w-1/2'>
            <h3>Discription</h3>
          <textarea name="" id="">

          </textarea>
          </div>

          
          <button>Create Task</button>
          
        </form>
      </div>
    </div>
  )
}

export default AdminDashboard
