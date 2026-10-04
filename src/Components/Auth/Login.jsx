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
    <div className='flex min-h-screen items-center justify-center bg-[linear-gradient(180deg,#efe7db_0%,#f7f3ee_100%)] p-6'>
      <div className='w-full max-w-[440px] rounded-[22px] border border-border bg-paper/90 px-[26px] py-8 shadow-[0_12px_30px_rgba(29,26,23,0.08)]'>
        <div className='mb-[26px] text-center'>
          <p className='m-0 text-[11px] font-bold uppercase tracking-[0.18em] text-sage'>Estate management</p>
          <h1 className='mt-3 text-[2.2rem] font-semibold text-charcoal md:text-5xl'>Welcome back</h1>
        </div>

        <form onSubmit={submitHandler} className='flex flex-col gap-[18px]'>
          <div className='flex flex-col gap-2'>
            <label className='text-[0.78rem] uppercase tracking-[0.08em] text-muted'>Email</label>
            <input
              className='w-full rounded-xl border border-border bg-field px-3.5 py-3 text-[0.96rem] text-charcoal placeholder:text-muted/70 transition focus:border-gold focus:outline-none focus:shadow-[0_0_0_3px_rgba(184,157,103,0.12)]'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type='email'
              placeholder='Enter your email'
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='text-[0.78rem] uppercase tracking-[0.08em] text-muted'>Password</label>
            <input
              className='w-full rounded-xl border border-border bg-field px-3.5 py-3 text-[0.96rem] text-charcoal placeholder:text-muted/70 transition focus:border-gold focus:outline-none focus:shadow-[0_0_0_3px_rgba(184,157,103,0.12)]'
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
              type='password'
              placeholder='Enter your password'
            />
          </div>

          <button type='submit' className='mt-1 w-full rounded-xl border border-charcoal bg-charcoal px-4 py-2.5 text-[0.82rem] font-semibold tracking-[0.04em] text-paper transition duration-150 hover:-translate-y-px hover:opacity-95'>
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
