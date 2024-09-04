import React from 'react'
import { Link } from 'react-router-dom'

const MemberLogin = () => {
  return (
    <div className="my-12 mx-auto px-2 py-24 h-full sm:px-8 md:px-16 lg:px-24">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold">Sign in</h2>
        </div>
        <form action="">
          <div class="mb-6">
            <label className="block mb-2 font-bold" for="">Email</label>
            <input className="inline-block w-full p-4 leading-3 text-lg font-normal placeholder-primary-100 bg-white shadow border-2 border-primary-100 rounded" type="email" placeholder="email"/>
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-bold" for="">Password</label>
            <input className="inline-block w-full p-4 leading-3 text-lg font-normal placeholder-primary-100 bg-white shadow border-2 border-primary-100 rounded" type="password" placeholder="**********"/>
          </div>
          <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
            <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
              <label for="">
                  <input type="checkbox"/>
                  <span className="ml-1 font-semibold">Remember me</span>
                </label>
            </div>
            <div className="w-full lg:w-auto px-4"><Link to="/forget-password" className="inline-block font-semibold hover:underline">Forgot your
                password?</Link></div>
          </div>
          <button className="inline-block w-full py-4 px-6 mb-6 text-center text-lg leading-6 text-white font-semibold bg-primary-100 hover:bg-opacity-90 border-3 border-primary-100 shadow rounded transition duration-200">Sign in</button>
          <p className="text-center font-bold">Don&rsquo;t have an account? <Link to="/auth/registration" className="text-primary-100 hover:underline">Sign up</Link></p>
        </form>
      </div>
    </div>
  )
}

export default MemberLogin