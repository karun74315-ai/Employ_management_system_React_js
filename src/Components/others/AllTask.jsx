import { useContext } from 'react'
import { Authcontext } from '../../Context/Authcontext'

const AllTask = () => {
  const [UserData] = useContext(Authcontext)

  return (
    <section className='panel-shell workload-panel'>
      <div className='section-head'>
        <div>
          <p className='section-kicker'>Overview</p>
          <h2>Team workload</h2>
        </div>
      </div>

      <div className='workload-header'>
        <span>Employee</span>
        <span>New</span>
        <span>Active</span>
        <span>Done</span>
        <span>Failed</span>
      </div>

      <div className='workload-list'>
        {(UserData ?? []).map((e, idx) => (
          <div key={idx} className='workload-row'>
            <span className='employee-name'>{e.firstName}</span>
            <span>{e.taskCounts.newTask}</span>
            <span>{e.taskCounts.active}</span>
            <span>{e.taskCounts.completed}</span>
            <span>{e.taskCounts.failed}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AllTask
