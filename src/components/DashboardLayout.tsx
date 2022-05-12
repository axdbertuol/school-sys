import React, { ReactNode } from 'react'
import Header from './Header'
import Drawer from './Drawer'
import Copyright from './Copyright'

interface Props {
  children?: ReactNode
}

export default function DashboardLayout({ children }: Props) {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(true)

  function handleDrawerOpen() {
    setIsDrawerOpen(!isDrawerOpen)
  }

  let contentWrapperOpacity = 'opacity-100'
  if (isDrawerOpen) {
    contentWrapperOpacity = 'opacity-50 md:opacity-100'
  }

  return (
    <div className='flex'>
      <Header handleDrawerOpen={handleDrawerOpen} />

      <Drawer open={isDrawerOpen} handleDrawerOpen={handleDrawerOpen} />

      <div className={`flex flex-col z-0 items-center justify-center mx-auto w-full mt-16 h-full  transition-all ${contentWrapperOpacity}`}>
        {children}
        <footer className={"flex items-center border-2 justify-center h-10"}>
          <Copyright />
        </footer>
      </div>


    </div>
  )
}
