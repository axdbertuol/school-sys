import React from 'react'
import BlankLayout from '../../../components/BlankLayout'
import { NextPageWithLayout } from '../../../types/global'

const Signup: NextPageWithLayout = () => {
  return (

    <div className='fixed '>
      <div className='bg-slate-50   rounded-xl bg-opacity-90 my-10 p-10 shadow-md '>
        <h2 className="text-2xl font-bold text-brand-300">Login to Amorinha</h2>
        <div className="mt-8 max-w-md ">
          <form className="grid grid-cols-1 gap-6">
            <label className="block">
              <span className="text-gray-700">Email</span>
              <input
                type="email"
                className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-brand-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                placeholder="john@example.com"

              />
            </label>
            <label className="block">
              <span className="text-gray-700">Confirm Email</span>
              <input
                type="email"
                className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-brand-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                placeholder="john@example.com"

              />
            </label>
            <label className="block">
              <span className="text-gray-700">Password</span>
              <input
                type="password"
                className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-brand-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                placeholder=""
              />
            </label>
            <div className='divide-y'>
              <button
                type='submit'
                className='p-2 bg-brand-500 text-zinc-100 rounded-md border-transparent flex-1 justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500'
              >
                Login
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

Signup.getLayout = (page) => {
  return <BlankLayout>{page}</BlankLayout>
}

export default Signup;