import React, { useContext, useState } from 'react'
import { Authcontext } from '../../Context/Authprovider'


const CreateTask = () => {
     const [UserData, setUserData]  = useContext(Authcontext)
   
  const [taskTitle, settaskTitle] = useState('')
  const [taskdescription, setDescription] = useState('')
  const [taskDate, settaskDete] = useState('')
  const [Assign, setAssign] = useState('')
  const [Catogery, setCatogery] = useState('')

   const submitHandler= (e)=>{
    e.preventDefault();
    const task = {
      taskTitle,
      taskDescription: taskdescription,
      taskDate,
      category: Catogery,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    }

    const data = (UserData ?? []).map((employee) => {
      if (employee.firstName.toLowerCase() !== Assign.trim().toLowerCase()) {
        return employee
      }

      return {
        ...employee,
        tasks: [...employee.tasks, task],
        taskCounts: {
          ...employee.taskCounts,
          newTask: employee.taskCounts.newTask + 1
        }
      }
    })

    setUserData(data)
    localStorage.setItem('employees', JSON.stringify(data))

    settaskDete("")
    setAssign("")
    setDescription("")
    setCatogery("")
    settaskTitle("")
  //  console.log("task created")
   }
  return (
    <div>
      
      <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form onSubmit={(e)=>{
             submitHandler(e)
        }} action="" className='flex flex-wrap items-start justify-between w-full  '>
          <div className='w-1/2 '>

            <div>

          <h3 className='text-sm text-gray-300 nb-0.5'>Task Title</h3>
          <input  value={taskTitle}
          onChange={(e)=>{
            settaskTitle(e.target.value)
          }}
          type="text " placeholder='Make a UI design' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
          </div>

            <div>
            <h3 className='text-sm text-gray-300 nb-0.5'>Date</h3>
          <input  value={taskDate}
          onChange={(e)=>{
            settaskDete(e.target.value)
          }}
          type="date" className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'/>
          </div>

          <div>
            <h3 className='text-sm text-gray-300 nb-0.5'>Assign to</h3>
          <input value={Assign}
          onChange={(e)=>{
            setAssign(e.target.value)
          }}
           type="text" placeholder='Employee name'className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
          </div>

          <div>
            <h3 className='text-sm text-gray-300 nb-0.5'>Categoery</h3>
          <input value={Catogery}
          onChange={(e)=>{
            setCatogery(e.target.value)
          }}
           type="text " placeholder='Design / Dev / etc' className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' />
          </div>

          </div>
          

          <div className='w-2/5 flex flex-col items-start'>
            <h3 className='text-sm text-gray-300 nb-0.5'>Discription</h3>
          <textarea value={taskdescription}
          onChange={(e)=>{
            setDescription(e.target.value)
          }}
           name="" id="" className='w-full h-44  text-sm py-2 px-4 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4'>

          </textarea>
          <button className='bg-emerald-500 py-3 hover:bg-emerald-700 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
          </div >

          
          
          
        </form>
      </div>
      
    </div>
  )
}

export default CreateTask
