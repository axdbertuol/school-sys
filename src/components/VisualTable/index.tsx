import React from 'react'
import { Student } from '../../pages/students'
import Image from 'next/image'

interface VTableProps {
  students: Student[]
  columns: string[]
}

interface RowProps {
  data: Student
}

const Row = ({ data }: RowProps) => (
  <tr>
    <th>
      <label>
        <input type="checkbox" className="checkbox" />
      </label>
    </th>
    <td>
      <div className="avatar">
        <div className="mask mask-squircle w-12 h-12">
          <Image src={data.picture ?? ''} alt={'Stud picture'} width={45} height={45} />
        </div>
      </div>
    </td>
    <td className='text-xs'>
      {data.id}
    </td>
    <td>{data.surname + ', ' + data.name}</td>
    <td>{data.email}</td>
    <td>{data.avgGrade}</td>
    <th>
      <button className="btn btn-ghost btn-xs">details</button>
    </th>
  </tr>
)

export default function VisualTable({ students, columns }: VTableProps) {



  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            {
              columns.map((k) => <th key={k}>{k}</th>)
            }
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            students?.map((stud, index) => (
              <Row data={stud} key={index} />
            ))
          }
        </tbody>
      </table>
    </div>
  )
}
