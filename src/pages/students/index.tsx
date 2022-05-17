import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import VisualTable from '../../components/VisualTable'
import { NextPageWithLayout } from '../../types/global'
import { Role, User, UserType } from '../profile'

export const mockStudents: Student[] = [
  {
    id: '21312312',
    name: 'Jones',
    surname: 'Mano',
    email: 'jmano@email.com',
    birthday: '11-11-1991',
    role: Role.USER,
    userType: UserType.STUDENT,
    picture: 'https://api.lorem.space/image/face?w=150&h=220',
    avgGrade: 77.75,
    classes: [0, 1]
  },
  {
    id: '21312314',
    name: 'Brones',
    surname: 'Otto',
    email: 'brine@email.com',
    birthday: '10-11-1995',
    role: Role.USER,
    userType: UserType.STUDENT,
    picture: 'https://api.lorem.space/image/face?w=150&h=220',
    avgGrade: 67.75,
    classes: [0, 2]
  },
  {
    id: '213123x2',
    name: 'Xanti',
    surname: 'Doe',
    email: 'xdoe@email.com',
    birthday: '05-10-1996',
    role: Role.USER,
    userType: UserType.STUDENT,
    picture: 'https://api.lorem.space/image/face?w=150&h=220',
    avgGrade: 55.55,
    classes: [0, 1]
  },
  {
    id: '213y2312',
    name: 'Joao',
    surname: 'DSouza',
    email: 'jdosou@email.com',
    birthday: '11-01-1997',
    role: Role.USER,
    userType: UserType.STUDENT,
    picture: 'https://api.lorem.space/image/face?w=150&h=220',
    avgGrade: 80.55,
    classes: [0, 2]
  },
]

const columns = ['Picture', 'ID', 'Name', 'Email', 'AVG Grade']

export type Student = User & {
  avgGrade: number
  classes: StudentClass[] | StudentClass
}

export enum StudentClass {
  A,
  B,
  C
}

const StudentsList: NextPageWithLayout = () => {
  return (
    <>
      <main className='w-full lg:w-3/4'>
        <div className='my-10 lg:mt-15'>
          <VisualTable students={mockStudents} columns={columns} />
        </div>
      </main>
    </>
  )
}


StudentsList.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default StudentsList