import React, { ReactNode } from 'react'
import Image from 'next/image'

interface Props {
  children?: ReactNode
}

export default function DashboardLayout({ children }: Props) {
  return (
    <>
      <header className='flex absolute top-0 left-0 w-full h-16 bg-brand-300 bg-opacity-75 shadow-md'>
        <div></div>
      </header>
      <div className='flex flex-col absolute top-0 left-0 w-36 h-screen border-2'>
        <div className='h-16'>
        </div>
        <ul >
          <li>a</li>
          <li>a</li>
          <li>a</li>
        </ul>
      </div>
      <div className={`flex flex-col ml-48 mr-12 mt-24 h-full border-2 grow border-slate-600`}>
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


    </>
  )
}
