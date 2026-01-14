import React from 'react'
import Image from 'next/image'
import { FiArrowRight, FiTrash2 } from 'react-icons/fi'
import Button from './button'

type CartPopupProps = {
    open: boolean
    onClose: () => void
}

export const cartItems = [
    {
        id: 3,
        name: "Hypersoccer Pro",
        price: 1200000,
        qty: 1,
        category: "Football",
        imageURL: "hypersoccer-shoes.png",
    },
    {
        id: 1,
        name: "Hyperfast V1",
        price: 900000,
        qty: 1,
        category: "Running",
        imageURL: "hyperfast-shoes.png",
    },
    {
        id: 6,
        name: "Rocket Tennis Club",
        price: 1800000,
        qty: 100,
        category: "Tennis",
        imageURL: "rocket-tennis-2.png",
    },
]

const total = cartItems.reduce((acc, item) => acc + item.price * item.
    qty, 0)


export default function CartPopup({open, onClose}: CartPopupProps) {
    if (!open) return null
  return (
    <div className='absolute bg-white right-0 top-12 shadow-sm drop-shadow-black/10 border border-gray-200 w-90'>
        <div className="p-4 border-b border-gray-200 font-bold text-center">Shopping Cart
        </div>
        {
            cartItems.map((item) => (
                <div className='border-b border-gray-200 p-4 flex gap-3 items-center justify-between' key={item.id}>
                    <div className='bg-primary-light aspect-square w-16 h-16 flex justify-center items-center'>
                        <Image src={`/products/${item.imageURL}`} alt={item.name} width={60} height={60} className='object-contain aspect-square' />
                    </div>
                    <div className='flex flex-col gap-1 items-start flex-1'>
                        <h2 className='text-md font-medium'>{item.name}</h2>
                        <div className='flex flex-row gap-3'>
                            <p className='text-xs font-medium'>{item.qty}x</p>
                            <p className='text-xs font-medium text-primary'>IDR {item.price.toLocaleString('id-ID')}</p>
                        </div>
                    </div>
                    <Button variant="ghost" className='w-7 h-7 p-0! self-center ml-auto'>
                        <FiTrash2 size={16}/>
                    </Button>
                </div>
            ))
        }
        <div className='flex flex-col gap-6 p-4'>
            <div className='flex justify-between'>
                <div className='font-semibold text-black text-xs'>Total</div>
                <div className='font-semibold text-primary text-xs'>IDR {total.toLocaleString('id-ID')}</div>
            </div>
            <Button variant="dark" className='w-full'>Checkout Now <FiArrowRight size={16}/></Button>
        </div>
    </div>
  )
}
