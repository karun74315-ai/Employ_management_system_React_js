import Header from '../others/Header'
import Task from '../others/Task'
import TaskList from '../Taklist/TaskList'

const EmployDashboard = (props) => {
  return (
    <div className='min-h-screen bg-transparent px-2.5 py-5'>
      <div className='flex w-full flex-col gap-2.5'>
        <Header changeUser={props.changeUser} data={props.data} />
        <Task data={props.data} />
        <TaskList data={props.data} />
      </div>
    </div>
  )
}

export default EmployDashboard
