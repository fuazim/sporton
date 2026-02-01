'use client'

import { useState } from 'react'
import Button from '@/app/(landing)/components/ui/button'
import { FiPlus } from 'react-icons/fi'
import CategoryTable from '@/app/(dashboard)/components/categories/category-table'
import CategoryModal from '@/app/(dashboard)/components/categories/category-modal'

export default function CategoryManagement() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);
    const handleOpen = () => setIsOpen(true);

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div className="flex flex-col gap-1s">
                    <h1 className="text-3xl font-semibold">Category Management</h1>
                    <p className="text-lg text-gray-400">Organize your products into categories.</p>
                </div>
                <Button variant="primary" className='rounded-lg px-2 py-4 hover:bg-primary/80' onClick={handleOpen}> <FiPlus size={24} /> Add Category</Button>
            </div>
            <CategoryTable />
            <CategoryModal isOpen={isOpen} onClose={handleClose} />
        </div>
    )
}
