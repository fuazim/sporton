import React from 'react'
import Button from '../ui/button'
import { FiArrowRight } from 'react-icons/fi'
import Image from 'next/image'
import type { Category } from '@/app/types'
import { getImageUrl } from '@/app/lib/api'

interface CategoryProps {
    categories: Category[];
}

export default function Category({categories}: CategoryProps) {
  return (
    <section id='categorySection' className='container mx-auto flex flex-col gap-8 pb-60'>
        <div className="flex justify-between">
            <h2 className='font-bold text-2xl'>
                Browse by Categories
            </h2>
            <Button variant="ghost" className='text-primary hover:text-black! text-right! pr-0!'>See All Categories <FiArrowRight/></Button>
        </div>
        <div className="grid grid-cols-6 gap-14">
            {categories.map((category) => (
                <div key={category._id} className="flex flex-col gap-5 bg-gray-100 p-5 justify-center items-center h-50 hover:bg-primary hover:text-white transition-colors duration-300 group cursor-pointer">
                    <Image src={getImageUrl(category.imageUrl)} alt={category.name} width={86} height={86} />
                    <h3 className="font-medium text-primary text-2xl text-center group-hover:text-white">{category.name}</h3>
                </div>
            ))}
        </div>
    </section>
  )
}
