'use client'
import React, { useEffect } from 'react'
import Image from 'next/image';
import {LayoutGrid, PiggyBank, Receipt, ReceiptText, ShieldCheck} from "lucide-react";
import {UserButton} from '@clerk/nextjs';
import {usePathname} from 'next/navigation';
import Link from 'next/link';

function SideNav() {

  const menuList=[
    {
      id: 1,
      name: 'Dashboard',
      icon: LayoutGrid,
      path:'/dashboard'
    },
    {
      id: 2,
      name: 'Budget',
      icon: PiggyBank,
      path:'/dashboard/budget'
    },
    {
      id: 3,
      name: 'Expenses',
      icon: ReceiptText,
      path:'/dashboard/expenses'
    },
    {
      id:4,
      name: 'Update',
      icon: ShieldCheck,
      path:'/dashboard/update'
    }
  ]

  const path = usePathname();

  useEffect(() => {
    console.log(path)
  }, [path]);

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
          <Link href={menu.path} key={menu.id}>
          <h2  className={`flex gap-2 items-center text-gray-500 p-5 font-medium cursor-pointer rounded-md hover:text-blue-400 hover:bg-blue-100 ${path===menu.path&&'text-blue-400 bg-blue-100'} `}>
            <menu.icon></menu.icon>
            {menu.name}
          </h2>
          </Link>
        ))}
      </div>
      <div className='fixed bottom-1 p-5 flex gap-2 items-center'>
        <UserButton/>
        Profile
      </div>
    </div>
  )
}

export default SideNav