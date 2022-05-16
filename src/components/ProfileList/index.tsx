import Head from "next/head"
import React from "react"
import { Role, User, UserType } from "../../pages/profile"

interface Props {
  user: User
}

export default function ProfileList({ user }: Props) {
  const rowClass =
    "flex flex-col sm:flex-row justify-between items-center sm:items-start py-3 border-t border-gray-300 last:border-none"
  const leftClass = "w-full sm:w-1/3 font-medium text-center sm:text-left"
  const rightClass = "flex-1 text-center sm:text-left"

  const showUser = {
    ...user,
    role: Role[user.role],
    userType: UserType[user.userType]
  }
  return (
    <>
      <Head>
        <title>Your Profile</title>
        <meta name="description" content="User profile data" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full">
        <h3 className="text-2xl font-medium text-primary">Your Profile!</h3>
        <div className="mt-4 ">
          {
            Object.entries(showUser).map(([key, value]) => {
              return (
                <div className={rowClass} key={key}>
                  <span className={leftClass}>{key}</span>
                  <span className={rightClass}>{value}</span>
                </div>
              )
            })
          }
        </div>
      </main>
    </>
  )
}

