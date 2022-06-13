import Head from 'next/head'
import React from 'react'
import useSWR from 'swr'
import { StudentWithUserData, UserWithoutPassword } from '../../../../server/src/types'
import DashboardLayout from '../../components/DashboardLayout'
import ProfileList from '../../components/ProfileList'
import { NextPageWithLayout } from '../../types/global'
import { fetcher } from '../../utils'


const id = 'JB4UPALZzCu';
const Profile: NextPageWithLayout = () => {
  // TODO: change this when account service is available
  const { data, error } = useSWR<UserWithoutPassword>(`http://localhost:3333/students/${id}`, fetcher)
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

Profile.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default Profile