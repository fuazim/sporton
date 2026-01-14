import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FiPlus } from 'react-icons/fi'
import Button from '../ui/button'

const productsLists = [
    {
        id: 3,
        name: "Hypersoccer Pro",
        price: 1200000,
        category: "Football",
        imageURL: "hypersoccer-shoes.png",
    },
    {
        id: 1,
        name: "Hyperfast V1",
        price: 900000,
        category: "Running",
        imageURL: "hyperfast-shoes.png",
    },
    {
        id: 6,
        name: "Rocket Tennis Club",
        price: 1800000,
        category: "Tennis",
        imageURL: "rocket-tennis-2.png",
    },
    {
        id: 7,
        name: "Slow Livin Classic",
        price: 450000,
        category: "Running",
        imageURL: "slow-livin-tshirt.png",
    },
    {
        id: 4,
        name: "Hypersoccer Academy",
        price: 850000,
        category: "Football",
        imageURL: "hypersoccer-shoes-2.png",
    },
    {
        id: 2,
        name: "Hyperfast V2 Elite",
        price: 1350000,
        category: "Running",
        imageURL: "hyperfast-shoes-2.png",
    },
    {
        id: 8,
        name: "Slow Livin Modern",
        price: 550000,
        category: "Running",
        imageURL: "slow-livin-tshirt-2.png",
    },
    {
        id: 5,
        name: "Rocket Tennis Open",
        price: 2500000,
        category: "Tennis",
        imageURL: "rocket-tennis.png",
    },
]

export default function Products() {
    return (
        <section id='productSection' className='container mx-auto pb-60 flex flex-col gap-8'>
            <div className='flex justify-center items-center'>
                <h2 className='font-bold text-4xl italic text-black'><span className='text-primary'>OUR </span>PRODUCTS</h2>
            </div>
            <div className="grid grid-cols-4 gap-7">
                {
                    productsLists.map((product) => (
                        <Link href="#" key={product.id} className='p-1.5 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300'>
                            <div className="relative bg-primary-light w-full flex justify-center items-center">
                                <Image src={`/products/${product.imageURL}`} alt={product.name} width={300} height={300} className='object-contain aspect-square' />
                                <Button className='absolute top-2 right-2 p-2!'><FiPlus size={24} /></Button>
                            </div>
                            <div>
                                <h3 className='text-lg font-bold'>{product.name}</h3>
                            </div>
                            <div className="flex justify-between">
                                <p className='font-regular text-sm text-gray-400'>{product.category}</p>
                                <h3 className='text-lg font-medium text-primary'>IDR {product.price.toLocaleString('id-ID')}</h3>
                            </div>
                        </Link>
                    ))
                }
            </div>

        </section>
    )
}
