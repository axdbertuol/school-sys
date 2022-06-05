import React, { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

export default function BlankLayout({ children }: Props) {
  return (
    <div className='flex justify-center bg-primary bg-opacity-70 min-h-screen'>{children}</div>
  )
}
