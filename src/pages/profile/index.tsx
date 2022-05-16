import Head from 'next/head'
import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import ProfileList from '../../components/ProfileList'
import { NextPageWithLayout } from '../../types/global'

export type User = {
  id: string
  name: string
  surname: string
  email: string
  birthday: string
  role: Role
  userType: UserType
  picture?: string
}

export enum UserType {
  STUDENT,
  TEACHER
}

export enum Role {
  USER,
  ADMIN
}

const userMock: User = {
  id: '21312312',
  name: 'Jones',
  surname: 'Mano',
  email: 'jmano@email.com',
  birthday: '11-11-1991',
  role: Role.USER,
  userType: UserType.STUDENT,
  picture: 'https://api.lorem.space/image/face?w=150&h=220'
}

const Profile: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Your Profile</title>
        <meta name="description" content="User profile data" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='m-5 w-4/5 lg:w-1/2'>
        <ProfileList user={userMock} />
      </main>
    </>
  )
}

Profile.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default Profile