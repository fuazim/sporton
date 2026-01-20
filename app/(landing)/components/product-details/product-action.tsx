'use client'

import React, { useState } from 'react'
import Button from '../ui/button'
import { FiArrowRight, FiShoppingBag, FiChevronUp, FiChevronDown } from 'react-icons/fi'
import { useRouter } from 'next/navigation'
import { useCartStore } from '@/app/hooks/use-cart-store'
import { Product } from '@/app/types'

interface ProductActionProps {
    product: Product
}

export default function ProductAction({ product }: ProductActionProps) {
    const { push } = useRouter()
    const addItem = useCartStore((state) => state.addItem)
    const [qty, setQty] = useState(1)

    const handleAddToCart = () => {
        addItem(product, qty)
        setQty(1) // Reset quantity after adding to cart
    }

    return (
        <div className='flex gap-6'>
            <div className='border border-gray-400 inline-flex items-stretch h-14'>
                <div className='aspect-square h-full text-xl font-medium text-black flex items-center justify-center'>
                    <span>{qty}</span>
                </div>
                <div className='flex flex-col border-l border-gray-400'>
                    <button onClick={() => setQty(qty < product.stock ? qty + 1 : qty)} className='h-1/2 aspect-square flex items-center justify-center hover:bg-gray-100 border-b border-gray-400 text-gray-600 transition-colors'>
                    <FiChevronUp size={16} />
                    </button>
                    <button onClick={() => setQty(qty > 1 ? qty - 1 : qty)} className='h-1/2 aspect-square flex items-center justify-center hover:bg-gray-100 text-gray-600 transition-colors'>
                        <FiChevronDown size={16} />
                    </button>
                </div>
            </div>
            <Button variant='primary' className='w-full' onClick={handleAddToCart}> <FiShoppingBag size={24} /> Add to Cart</Button>
            <Button variant='dark' className='w-full' onClick={() => push('/checkout')}>Checkout Now <FiArrowRight size={24} /></Button>
        </div>
    )
}
