import React from 'react'

interface Props {
  handleDrawerOpen: () => void
}

export default function Header({ handleDrawerOpen }: Props) {
  return (
    <header className='flex z-20 absolute top-0 left-0 w-full h-16 bg-brand-300 bg-opacity-90 shadow-md'>
      <div className={'h-16 w-44 flex items-center  '} >
        <div className='flex ml-2 justify-between items-center gap-2'>
          <p className='text-slate-50'>Amorinha</p>

          <button
            className='order-first'
            onClick={handleDrawerOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

    </header>
  )
}
