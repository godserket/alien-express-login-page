import './styles/global.css'
import './styles/sky.css'
import { Alien } from '@phosphor-icons/react'
export function App() {

  return (
    <>

      <div className="bg-animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="stars4"></div>
      </div>
      <div className='h-screen bg-gradient-to-br from-sky-950 via-slate-900 to-blue-950'>

        <div className="relative flex h-full flex-col items-center">

          <div className="flex text-white/90 justify-between gap-2 items-center mt-20">
            <Alien size={40} weight='fill' />
            <span className="text-2xl">Alien Express</span>
          </div>

          <form className='flex flex-col mt-10 border-white/70 rounded-lg w-[85%] h-1/2 items-center'>
            <h1 className='text-white/90 text-2xl mt-4'>Login</h1>
            <div className='h-[2px] mt-2 bg-gradient-to-r from-red-500 to-blue-800 via-violet-600 w-1/2' />

            <div className='mt-8 mx-8'>
              <label className='text-white/90 text-md'>Username</label>
              <input
                type='text'
                placeholder='Enter your Username'
                className='mt-1 focus:outline-none bg-slate-900/40 border-2 border-white/70 rounded-lg w-full text-white/90 placeholder-white/60 text-sm py-2 px-3'
              />
            </div>


            <div className='mt-8 mx-8'>
              <label className='text-white/90 text-md'>Password</label>
              <input
                type='text'
                placeholder='Enter your Password'
                className='mt-1 focus:outline-none bg-slate-900/40 border-2 border-white/70 rounded-lg w-full text-white/90 placeholder-white/60 text-sm py-2 px-3'
              />
            </div>

            <button
              onClick={() => alert('vc logou')}
              className='w-[80%] mt-8 py-2 text-white/90 text-xl rounded-lg bg-gradient-to-r from-red-500/80 to-blue-800/80 via-violet-600/80'>
              Login
            </button>

            <div className="flex mt-4 gap-1">
              <span className="text-xs text-white/70">Don't have an account?</span>
              <span className="text-xs text-white/90">register</span>
            </div>
          </form>

        </div>

      </div>
    </>
  )
}

