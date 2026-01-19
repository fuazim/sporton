'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiPlus } from 'react-icons/fi'
import Button from '../ui/button'
import { Product } from '@/app/types'
import { getImageUrl } from '@/app/lib/api'
import { useCartStore } from '@/app/hooks/use-cart-store'

interface ProductsProps {
    products: Product[];
}

export default function Products({products}: ProductsProps) {
    const {addItem} = useCartStore()

    const handleAddToCart = (e: React.MouseEvent, product: Product) => {
        e.preventDefault()
        e.stopPropagation()
        addItem(product, 1)
    }

    return (
        <section id='productSection' className='container mx-auto pb-60 flex flex-col gap-8'>
            <div className='flex justify-center items-center'>
                <h2 className='font-bold text-4xl italic text-black'><span className='text-primary'>OUR </span>PRODUCTS</h2>
            </div>
            <div className="grid grid-cols-4 gap-7">
                {
                    products.map((product) => (
                        <Link href={`/product/${product._id}`} key={product._id} className='p-1.5 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300'>
                            <div className="relative bg-primary-light w-full flex justify-center items-center">
                                <Image src={getImageUrl(product.imageUrl)} alt={product.name} width={300} height={300} className='object-contain aspect-square' />
                                <Button className='absolute top-2 right-2 p-2!' onClick={(e) => handleAddToCart(e, product)}><FiPlus size={24} /></Button>
                            </div>
                            <div>
                                <h3 className='text-lg font-bold'>{product.name}</h3>
                            </div>
                            <div className="flex justify-between">
                                <p className='font-regular text-sm text-gray-400'>{product.category.name}</p>
                                <h3 className='text-lg font-medium text-primary'>IDR {product.price.toLocaleString('id-ID')}</h3>
                            </div>
                        </Link>
                    ))
                }
            </div>

        </section>
    )
}
