import React from 'react'
import { FaGithub, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = ({ isLoginMode, setisLoginMode }) => {
  return (
    <div className='w-full max-w-[400px] bg-white p-6 rounded-3xl shadow-2xl'>
      {/*Header title*/}
      <div className='flex flex-col items-center mb-6'>
        <div className="w-14 h-14 bg-linear-to-br from-blue-500 to-cyan-400 rounded-full mb-3 shadow-lg"></div>
        <h2 className='text-2xl font-bold text-blue-600'>Competition Site</h2>
        <p className="text-gray-400 text-sm mt-1">Insert Short Description</p>
      </div>

      {/* Tab controls */}
      <div className='relative flex h-10 mb-6 bg-gray-100 rounded-full p-1'>
        <button onClick={() => setisLoginMode(true)} className={`flex-1 rounded-full text-sm font-medium transition-all z-10 ${isLoginMode ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-700'}`} >
          Log In
        </button>
        <button onClick={() => setisLoginMode(false)} className={`flex-1 rounded-full text-sm font-medium transition-all z-10 ${!isLoginMode ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-700'}`} >
          Sign up
        </button>
      </div>

      {/* Form section */}
      <form className='space-y-3'>
        {!isLoginMode && (
          <div className="flex gap-2">
            <div className="flex-1">
              <label className="text-xs font-bold text-gray-600 ml-1">Name</label>
              <input type="text" placeholder="Nom" required className='w-full p-2.5 bg-gray-50 rounded-xl border-none outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400 text-sm' />
            </div>
            <div className="flex-1">
              <label className="text-xs font-bold text-gray-600 ml-1">Surname</label>
              <input type="text" placeholder="Surname" required className='w-full p-2.5 bg-gray-50 rounded-xl border-none outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400 text-sm' />
            </div>
          </div>
        )}

        <div>
          <label className="text-xs font-bold text-gray-600 ml-1">Email</label>
          <input type="email" placeholder="email@example.com" required className='w-full p-2.5 bg-gray-50 rounded-xl border-none outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400 text-sm' />
        </div>

        <div>
          <label className="text-xs font-bold text-gray-600 ml-1">Password</label>
          <input type="password" placeholder="........" required className='w-full p-2.5 bg-gray-50 rounded-xl border-none outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400 text-sm' />
        </div>

        {/* Signup field */}
        {!isLoginMode && (
          <div>
            <label className="text-xs font-bold text-gray-600 ml-1">Confirm Password</label>
            <input type="password" placeholder="........" required className='w-full p-2.5 bg-gray-50 rounded-xl border-none outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400 text-sm' />
          </div>
        )}

        {/* Shared button */}
        <button type="submit" className='w-full p-3 mt-2 bg-linear-to-r from-cyan-400 to-blue-500 text-white rounded-xl text-sm font-bold hover:shadow-lg hover:from-cyan-500 hover:to-blue-600 transition-all flex justify-center items-center gap-2'>
          {isLoginMode ? "Login ->" : "Register ->"}
        </button>

        <div className="relative flex py-2 items-center">
          <div className="grow border-t border-gray-200"></div>
          <span className="shrink-0 mx-4 text-gray-300 text-xs">Or continue with</span>
          <div className="grow border-t border-gray-200"></div>
        </div>

        <div className="flex justify-center gap-4">
          <button type="button" className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
            <FaGithub className="text-xl text-gray-900" />
          </button>
          <button type="button" className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
            <FcGoogle className="text-xl" />
          </button>
          <button type="button" className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
            <FaApple className="text-xl text-black" />
          </button>
        </div>

      </form>

    </div>
  )
}

export default Login
