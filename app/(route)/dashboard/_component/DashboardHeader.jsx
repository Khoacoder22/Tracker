import { UserButton } from '@clerk/nextjs'
import React from 'react'

const DashboardHeader = () => {
  return (
    <div className='flex p-5 shadow-sm border justify-between'>
       <div>
       </div>
       <div>
        <UserButton></UserButton>
       </div>
    </div>
  )
}

export default DashboardHeader