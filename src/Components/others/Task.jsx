
const Task = ({ data }) => {
  const stats = [
    { label: 'New task', value: data?.taskCounts?.newTask ?? 0, tone: 'warm' },
    { label: 'Completed', value: data?.taskCounts?.completed ?? 0, tone: 'sage' },
    { label: 'Failed', value: data?.taskCounts?.failed ?? 0, tone: 'stone' },
    { label: 'Active', value: data?.taskCounts?.active ?? 0, tone: 'gold' }
  ]
  const accentColors = {
    warm: 'bg-stat-warm',
    sage: 'bg-stat-sage',
    stone: 'bg-stat-stone',
    gold: 'bg-stat-gold'
  }

  return (
    <div className='mb-4.5 grid grid-cols-4 gap-3.5 max-md:grid-cols-1'>
      {stats.map((stat) => (
        <div key={stat.label} className='min-h-28 rounded-[10px] border border-stat-border border-l-[3px] border-l-stat-accent bg-white px-[17px] pb-[15px] pt-[15px] shadow-[0_2px_8px_rgba(26,54,39,0.03)]'>
          <div className={`mb-4.5 h-1 w-11 rounded-full ${accentColors[stat.tone]}`} />
          <div>
            <h2 className='m-0 text-[clamp(1.8rem,2vw,2.4rem)] text-charcoal'>{stat.value}</h2>
            <h3 className='mt-2 text-[0.9rem] tracking-[0.04em] text-muted'>{stat.label}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Task
