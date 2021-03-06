import React from 'react'
import Image from 'next/image'

interface Props {
  handleDrawerOpen: () => void
}

export default function Navbar({ handleDrawerOpen }: Props) {
  return (
    <>
      <button className="fixed z-20 top-2 left-2 btn btn-circle bg-transparent border-0 " onClick={handleDrawerOpen}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </button>
      <header className='flex  fixed top-0 left-0 w-full h-16  bg-gradient-to-r from-primary to-brand-300 bg-opacity-75 shadow-md'>
        <div className="navbar text-slate-300  ">
          <div className="navbar-start ">
            <h3 className='h-16 text-primary text-center  align-middle text-2xl'>
              <span className='rounded p-2 font-light font-mont tracking-widest italic'>Amorinha</span>
            </h3>

            <a className="btn jus btn-ghost normal-case text-xl ">
              <Image src={'/images/berry.png'} alt='logo' width={35} height={35}></Image>
            </a>

          </div>
          <div className="navbar-center hidden lg:flex">

          </div>
          <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>
        </div>
      </header>
    </>
  )
}
