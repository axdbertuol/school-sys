import Link from 'next/link'
import React from 'react'

interface Props {
  open: boolean
}

export default function Drawer({ open }: Props) {
  let drawerWidthStyle = 'w-0 border-none '
  let isHidden = 'hidden'
  if (open) {
    isHidden = ''
    drawerWidthStyle = 'w-44'
  }
  return (
    <div className={`flex flex-col z-10 fixed top-0 left-0 h-screen shadow-lg  bg-base-100 text-stone-900 transition-all ${drawerWidthStyle} `}>
      <div className={'h-16 w-44 mb-20'} >
      </div>
      <div className={isHidden}>
        <ul className={'menu  overflow-y-auto text-brand-300 divide-y-2'}>
          <li className='group list-item w-full transition-all'>
            <Link href={''}>
              <button className='flex w-full focus:text-zinc-400 group-hover:transition-all'><span className=''>Dashboard</span></button>
            </Link>
          </li>
          <li className='group list-item w-full transition-all'>
            <Link href={''}>
              <button className='w-full  focus:text-zinc-400  group-hover:transition-all'><span className=''>Students</span></button>
            </Link>
          </li>
          <li className='group list-item w-full transition-all'>
            <Link href={''}>
              <button className='w-full  focus:text-zinc-400  group-hover:transition-all'><span className=''>Classes</span></button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
