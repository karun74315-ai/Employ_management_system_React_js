import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

function AdminDashboard(props) {
  return (
    <div className='min-h-screen bg-transparent px-2.5 py-5'>
      <div className='flex w-full flex-col gap-2.5'>
        <Header changeUser={props.changeUser} data={props.data} />
        <CreateTask />
        <AllTask />
      </div>
    </div>
  )
}

export default AdminDashboard
