"use client" // Lệnh này chạy render trên trình duyệt (client-side) thay vì máy chủ (server-side)

import Image from 'next/image'
import Link from 'next/link' // Đã thêm import Link
import { Button } from '@/components/ui/button'
import { UserButton, useUser } from '@clerk/nextjs'

const Header = () => {
  const { user, isSignedIn } = useUser(); // Do dùng hook nên bắt buộc phải có "use client" ở đầu file

  return (
    <div className='p-5 flex justify-between items-center border shadow-sm'>
      <Image 
        src={'/logo.svg'}
        alt='logo'
        width={160}
        height={100}
      />
      
      {/* Kiểm tra nếu đã đăng nhập thì hiện Avatar, chưa thì hiện nút Get Started */}
      {isSignedIn ? (
        <UserButton />
      ) : (
        <Link href={'/sign-in'}>
          <Button className="bg-linear-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full px-8 py-6 text-md shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:scale-105 transition-all duration-300">
            Get started
          </Button>
        </Link> // Đã sửa lỗi thẻ đóng </Link>
      )}
    </div>
  )
}

export default Header;