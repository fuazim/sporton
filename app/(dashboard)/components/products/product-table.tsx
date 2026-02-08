import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { FiEdit2, FiTrash2 } from 'react-icons/fi'
import Button from '@/app/(landing)/components/ui/button'

import { Product } from '@/app/types'
import { getImageUrl } from '@/app/lib/api'

type TProductTableProps = {
    products: Product[];
    isLoading: boolean;
    onEdit?: (product: Product) => void;
    onDelete?: (id: string) => void;
}

export default function ProductTable({ products, isLoading, onEdit, onDelete }: TProductTableProps) {
    const handleDeleteClick = (id: string) => {
        if (onDelete && confirm('Are you sure you want to delete this product?')) {
            onDelete(id);
        }
    }

    if (isLoading) {
        return <div className="p-8 text-center text-gray-500">Loading products...</div>
    }

    return (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50">
                        <tr className="border-b border-gray-200">
                            <th className='px-6 py-4 font-semibold text-gray-700'>Product</th>
                            <th className='px-6 py-4 font-semibold text-gray-700'>Category</th>
                            <th className='px-6 py-4 font-semibold text-gray-700'>Price</th>
                            <th className='px-6 py-4 font-semibold text-gray-700'>Stock</th>
                            <th className='px-6 py-4 font-semibold text-gray-700'>Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {products.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                                    No products found. Add your first product!
                                </td>
                            </tr>
                        ) : (
                            products.map((product) => (
                                <tr key={product._id} className="hover:bg-gray-50 transition-colors">
                                    <td className='px-6 py-4'>
                                        <div className="flex items-center gap-4">
                                            <div className="relative w-12 h-12 shrink-0 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                                                {product.imageUrl ? (
                                                    <Image
                                                        src={getImageUrl(product.imageUrl)}
                                                        alt={product.name}
                                                        fill
                                                        className="object-contain"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                                                        No Img
                                                    </div>
                                                )}
                                            </div>
                                            <span className="font-medium text-gray-900">{product.name}</span>
                                        </div>
                                    </td>
                                    <td className='px-6 py-4 text-gray-600'>
                                        <span className="bg-gray-100 px-2.5 py-1 rounded-full text-sm font-medium text-gray-700">
                                            {product.category?.name || 'Uncategorized'}
                                        </span>
                                    </td>
                                    <td className='px-6 py-4 text-gray-600 font-medium'>
                                        Rp {product.price?.toLocaleString('id-ID')}
                                    </td>
                                    <td className='px-6 py-4 text-gray-600'>
                                        {product.stock}
                                    </td>
                                    <td className='px-6 py-4 text-gray-600'>
                                        <div className="flex gap-4">
                                            <Button onClick={() => onEdit?.(product)} className='p-0!' variant="ghost"><FiEdit2 size={20} /></Button>
                                            <Button onClick={() => handleDeleteClick(product._id)} className='p-0!' variant="ghost"><FiTrash2 size={20} /></Button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
