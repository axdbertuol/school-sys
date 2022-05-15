import React, { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

export default function BlankLayout({ children }: Props) {
  return (
    <div className='flex items-center justify-center'>{children}</div>
  )
}
