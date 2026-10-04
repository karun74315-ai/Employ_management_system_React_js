import { useState } from 'react'

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail('')
    setpassword('')
  }

  return (
    <div className='login-shell'>
      <div className='login-panel'>
        <div className='login-intro'>
          <p className='login-kicker'>Estate management</p>
          <h1>Welcome back</h1>
        </div>

        <form onSubmit={submitHandler} className='login-form'>
          <div className='field-group'>
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type='email'
              placeholder='Enter your email'
            />
          </div>

          <div className='field-group'>
            <label>Password</label>
            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
              type='password'
              placeholder='Enter your password'
            />
          </div>

          <button type='submit' className='old-money-button'>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
