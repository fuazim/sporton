'use client'

import { useState } from 'react'
import Button from '@/app/(landing)/components/ui/button'
import { FiPlus } from 'react-icons/fi'
import ProductTable from '@/app/(dashboard)/components/products/product-table'
import ProductModal from '@/app/(dashboard)/components/products/product-modal'

export default function ProductManagement() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);
    const handleOpen = () => setIsOpen(true);

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div className="flex flex-col gap-1s">
                    <h1 className="text-3xl font-semibold">Product Management</h1>
                    <p className="text-lg text-gray-400">Manage your inventory, prices and stock.</p>
                </div>
                <Button variant="primary" className='rounded-lg px-2 py-4 hover:bg-primary/80' onClick={handleOpen}> <FiPlus size={24} /> Add Product</Button>
            </div>
            <ProductTable />
            <ProductModal isOpen={isOpen} onClose={handleClose} />
        </div>
    )
}
