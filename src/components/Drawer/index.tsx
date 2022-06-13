import Link from 'next/link'
import React from 'react'

interface Props {
  open: boolean
}

export default function Drawer({ open }: Props) {
  let drawerWidthStyle = 'w-0 border-none'
  let isHidden = 'hidden'
  if (open) {
    isHidden = ''
    drawerWidthStyle = 'w-44 md:w-64 '
  }
  return (
    <div className={`flex flex-col z-10 fixed top-0 left-0 h-screen shadow-lg bg-transparent text-stone-900 transition-all  ${drawerWidthStyle} `}>
      <div className={isHidden}>
        <div className={'h-16 w-44 md:w-64 mb-10'} >
        </div>

        <ul className={'menu  overflow-y-auto text-primary divide-y-2 '}>
          <li className='group list-item w-full transition-all'>
            <Link href={'/'}>
              <button className='flex w-full focus:text-primary-focus group-hover:transition-all'><span className='font-light tracking-wide'>Dashboard</span></button>
            </Link>
          </li>
          <li className='group list-item w-full transition-all '>
            <Link href={'/students'}>
              <button className='w-full  focus:text-primary-focus  group-hover:transition-all'><span className='font-light tracking-wide'>Students</span></button>
            </Link>
          </li>
          <li className='group list-item w-full transition-all'>
            <Link href={'/profile'}>
              <button className='w-full  focus:text-primary-focus  group-hover:transition-all'><span className='font-light tracking-wide'>Profile</span></button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
