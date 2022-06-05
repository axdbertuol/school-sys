import React from 'react'
import useSWR, { Fetcher } from 'swr'
import DashboardLayout from '../../components/DashboardLayout'
import VisualTable from '../../components/VisualTable'
import { NextPageWithLayout } from '../../types/global'
import { StudentWithUserData } from '../../../../server/src/types'
import { fetcher } from '../../utils'


const columns = ['ID', 'Name', 'Email', 'AVG Grade']

// export type Student = User & {
//   avgGrade: number
//   classes: StudentClass[] | StudentClass
// }




const StudentsList: NextPageWithLayout = () => {
  const { data, error } = useSWR<StudentWithUserData[]>('http://localhost:3333/students', fetcher)
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  console.log(data)
  return (
    <>
      <main className='w-full lg:w-3/4'>
        <div className='my-10 lg:mt-15'>
          <VisualTable students={data} columns={columns} />
        </div>
      </main>
    </>
  )
}


StudentsList.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default StudentsList