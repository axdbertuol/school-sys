import React from 'react'

export default function SignButton() {
  return (
    <button
      type='submit'
      className='p-2 bg-brand-500 rounded-md border-transparent flex-1 justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500'
    // disabled={comment.length === 0}
    >
      Login
    </button>
  )
}
