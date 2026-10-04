import { useContext, useState } from 'react'
import { Authcontext } from '../../Context/Authcontext'

const CreateTask = () => {
  const [UserData, setUserData] = useContext(Authcontext)

  const [taskTitle, settaskTitle] = useState('')
  const [taskdescription, setDescription] = useState('')
  const [taskDate, settaskDete] = useState('')
  const [Assign, setAssign] = useState('')
  const [Catogery, setCatogery] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
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

    settaskDete('')
    setAssign('')
    setDescription('')
    setCatogery('')
    settaskTitle('')
  }

  return (
    <section className='rounded-[22px] border border-border bg-paper/90 px-4.5 py-4 shadow-[0_12px_30px_rgba(29,26,23,0.08)]'>
      <div className='mb-4.5'>
        <div>
          <p className='m-0 text-[11px] font-bold uppercase tracking-[0.18em] text-sage'>Create</p>
          <h2 className='mt-2.5 text-2xl font-semibold text-charcoal md:text-[2rem]'>Assign a new task</h2>
        </div>
      </div>

      <form onSubmit={submitHandler} className='grid grid-cols-[minmax(0,1.3fr)_minmax(250px,0.9fr)] gap-5 max-md:grid-cols-1'>
        <div className='grid grid-cols-2 gap-4 max-md:grid-cols-1'>
          <div className='col-span-full flex flex-col gap-2'>
            <label className='text-[0.8rem] uppercase tracking-[0.06em] text-muted'>Task title</label>
            <input
              className='w-full rounded-xl border border-border bg-field px-3.5 py-3 text-[0.96rem] text-charcoal placeholder:text-muted/70 transition focus:border-gold focus:outline-none focus:shadow-[0_0_0_3px_rgba(184,157,103,0.12)]'
              value={taskTitle}
              onChange={(e) => settaskTitle(e.target.value)}
              type='text'
              placeholder='Make a UI design'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-[0.8rem] uppercase tracking-[0.06em] text-muted'>Date</label>
            <input
              className='w-full rounded-xl border border-border bg-field px-3.5 py-3 text-[0.96rem] text-charcoal placeholder:text-muted/70 transition focus:border-gold focus:outline-none focus:shadow-[0_0_0_3px_rgba(184,157,103,0.12)]'
              value={taskDate}
              onChange={(e) => settaskDete(e.target.value)}
              type='date'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-[0.8rem] uppercase tracking-[0.06em] text-muted'>Assign to</label>
            <input
              className='w-full rounded-xl border border-border bg-field px-3.5 py-3 text-[0.96rem] text-charcoal placeholder:text-muted/70 transition focus:border-gold focus:outline-none focus:shadow-[0_0_0_3px_rgba(184,157,103,0.12)]'
              value={Assign}
              onChange={(e) => setAssign(e.target.value)}
              type='text'
              placeholder='Employee name'
            />
          </div>

          <div className='col-span-full flex flex-col gap-2'>
            <label className='text-[0.8rem] uppercase tracking-[0.06em] text-muted'>Category</label>
            <input
              className='w-full rounded-xl border border-border bg-field px-3.5 py-3 text-[0.96rem] text-charcoal placeholder:text-muted/70 transition focus:border-gold focus:outline-none focus:shadow-[0_0_0_3px_rgba(184,157,103,0.12)]'
              value={Catogery}
              onChange={(e) => setCatogery(e.target.value)}
              type='text'
              placeholder='Design / Dev / etc'
            />
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <label className='text-[0.8rem] uppercase tracking-[0.06em] text-muted'>Description</label>
          <textarea
            className='min-h-45 flex-1 resize-y rounded-xl border border-border bg-field px-3.5 py-3 text-[0.96rem] text-charcoal placeholder:text-muted/70 transition focus:border-gold focus:outline-none focus:shadow-[0_0_0_3px_rgba(184,157,103,0.12)]'
            value={taskdescription}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Add task details'
          />
          <button type='submit' className='mt-2.5 rounded-xl border border-charcoal bg-charcoal px-4 py-2.5 text-[0.82rem] font-semibold tracking-[0.04em] text-paper transition duration-150 hover:-translate-y-px hover:opacity-95'>Create task</button>
        </div>
      </form>
    </section>
  )
}

export default CreateTask
