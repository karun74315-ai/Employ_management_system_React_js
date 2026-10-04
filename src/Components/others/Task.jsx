
const Task = ({ data }) => {
  const stats = [
    { label: 'New task', value: data?.taskCounts?.newTask ?? 0, tone: 'warm' },
    { label: 'Completed', value: data?.taskCounts?.completed ?? 0, tone: 'sage' },
    { label: 'Failed', value: data?.taskCounts?.failed ?? 0, tone: 'stone' },
    { label: 'Active', value: data?.taskCounts?.active ?? 0, tone: 'gold' }
  ]

  return (
    <div className='stats-grid'>
      {stats.map((stat) => (
        <div key={stat.label} className={`stat-card ${stat.tone}`}>
          <div className='stat-accent' />
          <div>
            <h2>{stat.value}</h2>
            <h3>{stat.label}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Task
