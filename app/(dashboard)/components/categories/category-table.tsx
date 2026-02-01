import React from 'react'
import Image from 'next/image'
import { FiEdit2, FiTrash2 } from 'react-icons/fi'
import Button from '@/app/(landing)/components/ui/button'

export default function CategoryTable() {
    const categories = [
        {
            _id: "1",
            name: "Running",
            description: "Running items",
            imageUrl: "/categories/category-running.png"
        },
        {
            _id: "2",
            name: "Football",
            description: "Football items",
            imageUrl: "/categories/category-football.png"
        },
        {
            _id: "3",
            name: "Basketball",
            description: "Basketball items",
            imageUrl: "/categories/category-basketball.png"
        },
        {
            _id: "4",
            name: "Badminton",
            description: "Badminton items",
            imageUrl: "/categories/category-badminton.png"
        },
        {
            _id: "5",
            name: "Tennis",
            description: "Tennis items",
            imageUrl: "/categories/category-tennis.png"
        },
        {
            _id: "6",
            name: "Swimming",
            description: "Swimming items",
            imageUrl: "/categories/category-swimming.png"
        },
    ]

    return (
        <div className="bg-white rounded-xl border border-gray-200">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className='px-6 py-4 font-semibold'>Category</th>
                        <th className='px-6 py-4 font-semibold'>Description</th>
                        <th className='px-6 py-4 font-semibold'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category) => (
                        <tr key={category._id} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                            <td className='px-6 py-4 flex items-center gap-4'>
                                <Image src={category.imageUrl} alt={category.name} width={48} height={48} className="w-12 h-12 object-contain rounded-lg bg-gray-100" />
                                <span className="font-medium text-gray-900">{category.name}</span>
                            </td>
                            <td className='px-6 py-4 text-gray-600'>{category.description}</td>
                            <td className='px-6 py-4 text-gray-600'>
                                <div className="flex gap-4">
                                    <Button className='p-0!' variant="ghost"><FiEdit2 size={20} /></Button>
                                    <Button className='p-0!' variant="ghost"><FiTrash2 size={20} /></Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
