import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

function AdminDashboard(props) {
  return (
    <div className='old-money-page'>
      <div className='old-money-shell'>
        <Header changeUser={props.changeUser} data={props.data} />
        <CreateTask />
        <AllTask />
      </div>
    </div>
  )
}

export default AdminDashboard
