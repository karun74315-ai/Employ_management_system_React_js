
const Header = ({ data, changeUser }) => {
  const logout = () => {
    localStorage.removeItem('loggedInUser')
    changeUser?.(null)
  }

  const userName = data?.firstName ?? data?.email ?? 'User'
  const role = data?.role ? data.role.toUpperCase() : 'USER'

  return (
    <header className='topbar-panel'>
      <div className='topbar-row'>
        <div>
          <p className='eyebrow'>Dashboard</p>
          <h1 className='welcome-title'>
            Hello, <span>{userName}</span>
          </h1>
        </div>

        <div className='header-actions'>
          <span className='role-pill'>{role}</span>
          <button onClick={logout} className='logout-button'>
            Log out
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
