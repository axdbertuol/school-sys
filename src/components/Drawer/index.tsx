import Link from 'next/link'
import React from 'react'

interface Props {
  open: boolean
  handleDrawerOpen: () => void
}

export default function Drawer({ open, handleDrawerOpen }: Props) {
  let drawerWidthStyle = 'w-0 border-none '
  if (open) {
    drawerWidthStyle = 'w-44'
  }
  return (
    <div className={`flex flex-col z-10 fixed top-0 left-0 h-screen shadow-lg    bg-brand-500   transition-all ${drawerWidthStyle} `}>
      <div className={'h-16 w-44 mb-20'} >
      </div>
      <div className={open ? '' : 'hidden'}>
        <ul className={'flex flex-col px-3 gap-2  text-zinc-300 leading-4'}>
          <li className='group list-item py-2 w-full transition-all rounded-md hover:ring-1  hover:ring-white hover:bg-opacity-30 hover:bg-slate-500'>
            <Link href={''}>
              <button className='pl-2 hover:text-zinc-100 group-hover:transition-all'><span className=''>Dashboard</span></button>
            </Link>
          </li>
          <li className='group list-item py-2 w-full transition-all rounded-md hover:ring-1  hover:ring-white hover:bg-opacity-30 hover:bg-slate-500'>
            <Link href={''}>
              <button className='pl-2 hover:text-zinc-100 group-hover:transition-all'><span className='hover:'>Classes</span></button>
            </Link>
          </li>

        </ul>
      </div>
    </div>
  )
}
