"use client"

import Image from 'next/image'
import { FiBox, FiCreditCard, FiLayers, FiLogOut, FiShoppingCart } from 'react-icons/fi'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const MenuItems = [
    {
        name: "Products",
        href: "/admin/products",
        icon: <FiBox size={24} />
    },
    {
        name: "Categories",
        href: "/admin/categories",
        icon: <FiLayers size={24} />
    },
    {
        name: "Transactions",
        href: "/admin/transactions",
        icon: <FiShoppingCart size={24} />
    },
    {
        name: "Bank Informations",
        href: "/admin/bank-informations",
        icon: <FiCreditCard size={24} />
    }
]

export default function sidebar() {
    const pathname = usePathname()
    return (
        <aside className='w-80 min-h-screen bg-white border-r border-gray-200 flex flex-col fixed left-0 top-0 z-10'>
            <div className="py-8 px-14 border-b border-gray-200 flex items-center">
                <Image src="/logos/sporton-logo-admin.svg" alt="Logo Admin" width={215} height={36} />
            </div>
            <div className="flex flex-col gap-2 px-6 py-12">
                {
                    MenuItems.map((item, index) => {
                        const isActive = item.href === pathname
                        return (
                            <Link key={index} href={item.href} className={isActive ? "flex items-center rounded-lg gap-3 px-4.5 py-4 text-primary bg-primary/10" : "flex items-center rounded-lg gap-3 px-4.5 py-4 hover:bg-gray-100 hover:text-black"}>
                                {item.icon}
                                <span className='font-medium'>{item.name}</span>
                            </Link>
                        )
                    })
                }
            </div>
            <div className='flex flex-col gap-2 px-6 py-6 mt-auto'>
                <Link href="/admin/logout" className="flex flex-1 items-center rounded-lg px-4.5 py-4 gap-3 hover:bg-gray-100 hover:text-black">
                    <FiLogOut size={24} />
                    <span className='font-medium'>Logout</span>
                </Link>
            </div>
        </aside>
    )
}
