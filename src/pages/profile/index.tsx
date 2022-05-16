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
  userType: UserType.STUDENT
}

const Profile: NextPageWithLayout = () => {
  return (
    <div className='m-5 md:w-1/2'>
      <ProfileList user={userMock} />
    </div>
  )
}

Profile.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default Profile