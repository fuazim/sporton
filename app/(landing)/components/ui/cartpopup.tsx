import React from 'react'
import Image from 'next/image'
import { FiArrowRight, FiTrash2, FiShoppingBag } from 'react-icons/fi'
import Button from './button'
import { useRouter } from 'next/navigation'
import { useCartStore } from '@/app/hooks/use-cart-store'
import { getImageUrl } from '@/app/lib/api'

type CartPopupProps = {
    open: boolean
    onClose: () => void
}

export default function CartPopup({ open, onClose }: CartPopupProps) {
    if (!open) return null
    const { push } = useRouter()
    const handleCheckout = () => {
        push('/checkout')
        onClose()
    }

    const cartItems = useCartStore((state) => state.items)
    const removeItem = useCartStore((state) => state.removeItem)
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    return (
        <div className='absolute bg-white right-0 top-12 shadow-sm drop-shadow-black/10 border border-gray-200 w-90'>
            <div className="p-4 border-b border-gray-200 font-bold text-center">Shopping Cart
            </div>
            {cartItems.length === 0 ? (
                <div className='p-8 flex flex-col items-center justify-center gap-3 text-gray-400'>
                    <FiShoppingBag size={40} />
                    <p className='text-sm'>Your cart is empty</p>
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
            <div className='flex flex-col gap-6 p-4'>
                <div className='flex justify-between'>
                    <div className='font-semibold text-black text-xs'>Total</div>
                    <div className='font-semibold text-primary text-xs'>IDR {total.toLocaleString('id-ID')}</div>
                </div>
                <Button variant="dark" className='w-full' onClick={handleCheckout}>Checkout Now <FiArrowRight size={16} /></Button>
            </div>
        </div>
    )
}
