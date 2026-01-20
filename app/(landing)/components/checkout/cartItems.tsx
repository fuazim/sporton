"use client"

import Image from 'next/image'
import Button from '../ui/button'
import { FiTrash2, FiCreditCard } from 'react-icons/fi'
import CardHeader from '../ui/cardheader'
import { useCartStore } from '@/app/hooks/use-cart-store'
import { getImageUrl } from '@/app/lib/api'

interface CartItemsProps {
    handlePayment: () => void;
}

export default function CartItems({ handlePayment }: CartItemsProps) {
    const cartItems = useCartStore((state) => state.items)
    const removeItem = useCartStore((state) => state.removeItem)
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    
    return (
        <CardHeader title="Cart Items">
            <div className="flex flex-col flex-1 overflow-auto h-150">
                {cartItems.length === 0 ? (
                    <div className="p-8 text-center text-gray-400 text-sm">
                        Your cart is empty
                    </div>
                ) : (
                    cartItems.map((item) => (
                        <div className='border-b border-gray-200 p-4 flex gap-3 items-center justify-between' key={item._id}>
                            <div className='bg-primary-light aspect-square w-16 h-16 flex justify-center items-center'>
                                <Image src={getImageUrl(item.imageUrl)} alt={item.name} width={60} height={60} className='object-contain aspect-square' unoptimized />
                            </div>
                            <div className='flex flex-col gap-1 items-start flex-1'>
                                <h2 className='text-md font-medium'>{item.name}</h2>
                                <div className='flex flex-row gap-3'>
                                    <p className='text-xs font-medium'>{item.quantity}x</p>
                                    <p className='text-xs font-medium text-primary'>IDR {item.price.toLocaleString('id-ID')}</p>
                                </div>
                            </div>
                            <Button variant="ghost" className='w-7 h-7 p-0! self-center ml-auto' onClick={() => removeItem(item._id)}>
                                <FiTrash2 size={16} />
                            </Button>
                        </div>
                    ))
                )}
            </div>
            <div className='flex flex-col gap-6 p-4 border-t border-gray-200'>
                <div className='flex justify-between'>
                    <div className='font-semibold text-black text-xs'>Total</div>
                    <div className='font-semibold text-primary text-xs'>IDR {total.toLocaleString('id-ID')}</div>
                </div>
                <Button variant="dark" className='w-full' onClick={handlePayment}><FiCreditCard size={18} /> Proceed to Payment</Button>
            </div>
        </CardHeader>
    )
}

