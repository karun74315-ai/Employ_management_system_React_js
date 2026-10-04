
const Header = ({ data, changeUser }) => {
  const logout = () => {
    localStorage.removeItem('loggedInUser')
    changeUser?.(null)
  }

  const userName = data?.firstName ?? data?.email ?? 'User'
  const role = data?.role ? data.role.toUpperCase() : 'USER'

  return (
    <header className='rounded-[22px] border border-border bg-paper/90 px-4.5 py-4 shadow-[0_12px_30px_rgba(29,26,23,0.08)]'>
      <div className='flex items-center justify-between gap-4.5 max-md:grid max-md:grid-cols-1 max-md:items-start'>
        <div>
          <p className='m-0 text-[11px] font-bold uppercase tracking-[0.18em] text-sage'>Dashboard</p>
          <h1 className='mt-2 text-[1.8rem] font-semibold text-charcoal md:text-[2.7rem]'>
            Hello, <span className='text-gold'>{userName}</span>
          </h1>
        </div>

        <div className='flex items-center gap-3.5 max-md:w-full max-md:justify-between'>
          <span className='rounded-full border border-border bg-role px-3 py-1.75 text-[11px] uppercase tracking-[0.12em] text-charcoal'>{role}</span>
          <button onClick={logout} className='rounded-xl border border-charcoal bg-charcoal px-4 py-2.5 text-[0.82rem] font-semibold tracking-[0.04em] text-paper transition duration-150 hover:-translate-y-px hover:opacity-95'>
            Log out
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
