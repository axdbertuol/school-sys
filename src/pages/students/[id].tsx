import Head from 'next/head'
import React from 'react'
import useSWR from 'swr'
import { StudentWithUserData, UserWithoutPassword } from '../../../../server/src/types'
import ProfileList from '../../components/ProfileList'
import { fetcher } from '../../utils'
interface Props {
  id: string
}

export default function StudentDetailPage({ id }: Props) {
  const { data, error } = useSWR<UserWithoutPassword>(`http://localhost:3333/student/${id}`, fetcher)
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  return (
    <>
      <Head>
        <title>Your Profile</title>
        <meta name="description" content="User profile data" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='m-5 w-4/5 lg:w-1/2'>
        <ProfileList user={data} />
      </main>
    </>
  )
}
