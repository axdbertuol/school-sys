import React, { ReactNode } from 'react'
import Image from 'next/image'

interface Props {
  children?: ReactNode
}

export default function DashboardLayout({ children }: Props) {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(true)
  let drawerWidthStyle = 'w-0 border-0'
  let contentWrapperOpacity = 'opacity-100'
  if (isDrawerOpen) {
    drawerWidthStyle = 'w-36'
    contentWrapperOpacity = 'opacity-50 md:opacity-100'
  }

  return (
    <div className='flex'>
      <header className='flex z-20 absolute top-0 left-0 w-full h-16 bg-brand-300 bg-opacity-75 shadow-md'>
        <div>
          <button
            className='items-center justify-center'
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            toggle
          </button>
        </div>
      </header>
      <div className={'flex flex-col z-10absolute top-0 left-0  h-screen border-2 transition-all ' + drawerWidthStyle}>
        <div className='h-16'>
        </div>
        <div className={isDrawerOpen ? '' : 'hidden'}>
          <ul className={''}>
            <li>a</li>
            <li>a</li>
            <li>a</li>
          </ul>
        </div>
      </div>
      <div className={`flex flex-col z-0 items-center justify-center mx-auto w-full mt-16 h-full border-2 border-slate-600 bg-slate-400 transition-all ${contentWrapperOpacity}`}>
        {children}
        <footer className={"flex items-center border-2 justify-center h-10"}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={""}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>


    </div>
  )
}
