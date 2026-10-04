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
    <section className='panel-shell'>
      <div className='section-head'>
        <div>
          <p className='section-kicker'>Create</p>
          <h2>Assign a new task</h2>
        </div>
      </div>

      <form onSubmit={submitHandler} className='task-form'>
        <div className='task-fields'>
          <div className='field-group full-width'>
            <label>Task title</label>
            <input
              value={taskTitle}
              onChange={(e) => settaskTitle(e.target.value)}
              type='text'
              placeholder='Make a UI design'
            />
          </div>

          <div className='field-group'>
            <label>Date</label>
            <input
              value={taskDate}
              onChange={(e) => settaskDete(e.target.value)}
              type='date'
            />
          </div>

          <div className='field-group'>
            <label>Assign to</label>
            <input
              value={Assign}
              onChange={(e) => setAssign(e.target.value)}
              type='text'
              placeholder='Employee name'
            />
          </div>

          <div className='field-group full-width'>
            <label>Category</label>
            <input
              value={Catogery}
              onChange={(e) => setCatogery(e.target.value)}
              type='text'
              placeholder='Design / Dev / etc'
            />
          </div>
        </div>

        <div className='task-notes'>
          <label>Description</label>
          <textarea
            value={taskdescription}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Add task details'
          />
          <button type='submit' className='old-money-button'>Create task</button>
        </div>
      </form>
    </section>
  )
}

export default CreateTask
