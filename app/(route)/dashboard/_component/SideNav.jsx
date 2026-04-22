import React from 'react'
import Image from 'next/image';
import {LayoutGrid, PiggyBank, Receipt, ReceiptText, ShieldCheck} from "lucide-react";


function SideNav() {

  const menuList=[
    {
      id: 1,
      name: 'Dashboard',
      icon: LayoutGrid
    },
    {
      id: 2,
      name: 'Budget',
      icon: PiggyBank
    },
    {
      id: 3,
      name: 'Expenses',
      icon: ReceiptText
    },
    {
      id:4,
      name: 'Update',
      icon: ShieldCheck 
    }
  ]

  return (
    <div className='h-screen p-5 border shadow-sm'>
      <Image src={'/logo.svg'}
      className='mb-3'
      alt='logo'
      width={160}
      height={100}
      />
      <div className=''>
        {menuList.map((menu,index)=>(
          <h2 className='flex gap-2 items-center text-gray-500 p-5 font-medium cursor-pointer rounded-md hover:text-blue-400 hover:bg-blue-100'>
            <menu.icon></menu.icon>
            {menu.name}
          </h2>
        ))}
      </div>
    </div>
  )
}

export default SideNav