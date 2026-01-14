import React from 'react'
import Button from '../ui/button'
import { FiArrowRight } from 'react-icons/fi'
import Image from 'next/image'

const categoryLists = [
    {
        id: 1,
        name: "Badminton",
        imageURL: "category-badminton.png",
    },
    {
        id: 2,
        name: "Basketball",
        imageURL: "category-basketball.png",
    },
    {
        id: 3,
        name: "Football",
        imageURL: "category-football.png",
    },
    {
        id: 4,
        name: "Running",
        imageURL: "category-running.png",
    },
    {
        id: 5,
        name: "Swimming",
        imageURL: "category-swimming.png",
    },
    {
        id: 6,
        name: "Tennis",
        imageURL: "category-tennis.png",
    },
]

export default function Category() {
  return (
    <section id='categorySection' className='container mx-auto flex flex-col gap-8 pb-60'>
        <div className="flex justify-between">
            <h2 className='font-bold text-2xl'>
                Browse by Categories
            </h2>
            <Button variant="ghost" className='text-primary hover:text-black! text-right! pr-0!'>See All Categories <FiArrowRight/></Button>
        </div>
        <div className="grid grid-cols-6 gap-14">
            {categoryLists.map((category) => (
                <div key={category.id} className="flex flex-col gap-5 bg-gray-100 p-5 rounded-lg justify-center items-center h-50 hover:bg-primary hover:text-white transition-colors duration-300 group cursor-pointer">
                    <Image src={`/categories/${category.imageURL}`} alt={category.name} width={86} height={86} />
                    <h3 className="font-medium text-primary text-2xl text-center group-hover:text-white">{category.name}</h3>
                </div>
            ))}
        </div>
    </section>
  )
}
