'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FiSearch, FiShoppingBag } from 'react-icons/fi'
import CartPopup from '../ui/cartpopup'
import { useState } from 'react'
import Button from '../ui/button'

const Header = () => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    return (
        <header className='sticky top-0 left-0 right-0 z-50 bg-white'>
        <div className='flex justify-between gap-10 container mx-auto py-7'>
            <Link href="/">
                <Image src="/logos/sporton-logo.svg" alt="Sporton Logo" width={127} height={30} />
            </Link>
            <nav className='flex gap-20 justify-center items-center font-medium'>
                <Link href="#" className="relative inline-block after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-2 after:w-6 after:h-1 after:bg-primary after:rounded-full">Home</Link>
                <Link href="#">Category</Link>
                <Link href="#">Explore Products</Link>
            </nav>
            <div className='relative flex gap-10 items-center justify-center'>
                <FiSearch size={24}/>
                <Button variant="ghost" size="small" className='relative cursor-pointer p-0!' onClick={() => setIsCartOpen(!isCartOpen)}>
                    <FiShoppingBag size={24}/>
                    <div className='flex items-center justify-center absolute -top-1 -right-1 w-3.5 h-3.5 bg-primary rounded-full text-[10px] text-primary-light text-center'>
                        3
                    </div>
                </Button>
                <CartPopup open={isCartOpen} onClose={() => setIsCartOpen(false)} />
            </div>
        </div>
    </header>
  )
}

export default Header

