import React from 'react'
import SideNav from './_component/SideNav'
import DashboardHeader from './_component/DashboardHeader'

// children giup component vi du Header dung 1 lan duy nhat o lay out, va no tu dong xuat hien o moi trang va phan noi dung thay doi thoai mai noi dung
const DashboardLayout = ({ children }) => {
    return (
        <div>
            <div className='fixed md:w-64 hidden md:block'>
                <SideNav></SideNav>
            </div>
            <div className='md:ml-64'>
                <DashboardHeader></DashboardHeader>
                {children}
            </div>
        </div>
    )
}

export default DashboardLayout