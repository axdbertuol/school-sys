import Image from 'next/image'

import React from "react"
import { UserWithoutPassword } from '../../../../server/src/types'

interface Props {
  user: UserWithoutPassword
}



let rowClass =
  "flex flex-col sm:flex-row justify-between items-center sm:items-start py-3 border-t border-gray-300 last:border-none"
let leftClass = "w-full sm:w-1/3 font-medium text-center sm:text-left hover:brand"
let rightClass = "flex-1 text-center sm:text-left"

export default function ProfileList({ user }: Props) {
  let type = (typeof user).includes("avgGrade") ? 'S' : 'T';
  console.log(user)
  return (

    <>
      <div className="mt-4">
        <div className='flex flex-col items-center gap-5'>
          {/* <div className="avatar">
            <div className="w-[20rem] rounded  transition-all hover:ring hover:ring-primary hover:ring-offset-base-100 hover:ring-offset-2">
              <Image src={pictureUrl} alt='Your Profile Pic' width={150} height={220} layout='responsive' objectFit='contain' />
            </div>
          </div> */}
          <h3 className="text-2xl font-medium text-primary mb-10">Your Profile!</h3>
        </div>
        {
          Object.entries(user).map(([key, value]) => {
            console.log(key, value);
            return (
              <div className={rowClass} key={key}>
                <span className={leftClass}>{key}</span>
                <span className={rightClass}>{value?.toString()}</span>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

