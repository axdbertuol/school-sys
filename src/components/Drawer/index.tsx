import React from 'react'

interface Props {
  open: boolean
  handleDrawerOpen: () => void
}

export default function Drawer({ open, handleDrawerOpen }: Props) {
  let drawerWidthStyle = 'w-0 border-none '
  let moveToggleBtn = ''
  if (open) {
    moveToggleBtn = 'justify-end'
    drawerWidthStyle = 'w-44'

  }
  return (
    <div className={`flex flex-col z-10 fixed top-0 left-0 h-screen border-r-2 border-brand-300  bg-slate-100  bg-opacity-90 transition-all ${drawerWidthStyle} `}>
      <div className={'h-16 w-44  '} >

      </div>
      <div className={open ? '' : 'hidden'}>
        <ul className={''}>
          <li>a</li>
          <li>a</li>
          <li>a</li>
        </ul>
      </div>
    </div>
  )
}
