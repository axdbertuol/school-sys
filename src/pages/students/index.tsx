import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import VisualTable from '../../components/VisualTable'
import { NextPageWithLayout } from '../../types/global'



const StudentsList: NextPageWithLayout = () => {
  return (
    <>
      <main className='w-full lg:w-3/4'>
        <div className='my-10 lg:mt-15'>

          <VisualTable />
        </div>
      </main>
    </>
  )
}


StudentsList.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default StudentsList