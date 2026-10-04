import Header from '../others/Header'
import Task from '../others/Task'
import TaskList from '../Taklist/TaskList'

const EmployDashboard = (props) => {
  return (
    <div className='old-money-page'>
      <div className='old-money-shell'>
        <Header changeUser={props.changeUser} data={props.data} />
        <Task data={props.data} />
        <TaskList data={props.data} />
      </div>
    </div>
  )
}

export default EmployDashboard
