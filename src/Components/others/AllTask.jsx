import { useContext } from 'react'
import { Authcontext } from '../../Context/Authcontext'

const AllTask = () => {
  const [UserData] = useContext(Authcontext)

  return (
    <section className='overflow-hidden rounded-[22px] border border-border bg-paper/90 px-4.5 py-4 shadow-[0_12px_30px_rgba(29,26,23,0.08)]'>
      <div className='mb-4.5'>
        <div>
          <p className='m-0 text-[11px] font-bold uppercase tracking-[0.18em] text-sage'>Overview</p>
          <h2 className='mt-2.5 text-2xl font-semibold text-charcoal md:text-[2rem]'>Team workload</h2>
        </div>
      </div>

      <div className='mb-2.5 grid grid-cols-[1.5fr_repeat(4,minmax(0,0.8fr))] items-center gap-3 rounded-xl border border-border bg-header px-3.5 py-3 text-[0.72rem] uppercase tracking-[0.12em] text-muted max-md:hidden'>
        <span>Employee</span>
        <span>New</span>
        <span>Active</span>
        <span>Done</span>
        <span>Failed</span>
      </div>

      <div className='flex flex-col gap-2 overflow-hidden'>
        {(UserData ?? []).map((e, idx) => (
          <div key={idx} className='grid min-h-[52px] grid-cols-[1.5fr_repeat(4,minmax(0,0.8fr))] items-center gap-3 rounded-xl border border-border border-b-row-border bg-row px-2.5 py-1.75 text-[13px] text-row-text max-md:grid-cols-2'>
            <span className='font-semibold'>{e.firstName}</span>
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
