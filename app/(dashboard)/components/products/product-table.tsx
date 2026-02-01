import React from 'react'
import Image from 'next/image'
import { FiEdit2, FiTrash2 } from 'react-icons/fi'
import Button from '@/app/(landing)/components/ui/button'

export default function ProductTable() {
    const products = [
        {
            _id: "1",
            name: "Hyperfast Shoes V2",
            category: "Shoes",
            price: 1500000,
            stock: 12,
            imageUrl: "/products/hyperfast-shoes-2.png"
        },
        {
            _id: "2",
            name: "Hyperfast Shoes",
            category: "Shoes",
            price: 1200000,
            stock: 8,
            imageUrl: "/products/hyperfast-shoes.png"
        },
        {
            _id: "3",
            name: "Hypersoccer Shoes V2",
            category: "Soccer",
            price: 1350000,
            stock: 15,
            imageUrl: "/products/hypersoccer-shoes-2.png"
        },
        {
            _id: "4",
            name: "Hypersoccer Shoes",
            category: "Soccer",
            price: 1100000,
            stock: 20,
            imageUrl: "/products/hypersoccer-shoes.png"
        },
        {
            _id: "5",
            name: "Rocket Tennis V2",
            category: "Tennis",
            price: 1800000,
            stock: 5,
            imageUrl: "/products/rocket-tennis-2.png"
        },
        {
            _id: "6",
            name: "Rocket Tennis",
            category: "Tennis",
            price: 1600000,
            stock: 10,
            imageUrl: "/products/rocket-tennis.png"
        },
        {
            _id: "7",
            name: "Slow Livin Tshirt V2",
            category: "Clothing",
            price: 350000,
            stock: 50,
            imageUrl: "/products/slow-livin-tshirt-2.png"
        },
        {
            _id: "8",
            name: "Slow Livin Tshirt",
            category: "Clothing",
            price: 300000,
            stock: 45,
            imageUrl: "/products/slow-livin-tshirt.png"
        },
    ]

    return (
        <div className="bg-white rounded-xl border border-gray-200">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className='px-6 py-4 font-semibold'>Product</th>
                        <th className='px-6 py-4 font-semibold'>Category</th>
                        <th className='px-6 py-4 font-semibold'>Price</th>
                        <th className='px-6 py-4 font-semibold'>Stock</th>
                        <th className='px-6 py-4 font-semibold'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product._id} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                            <td className='px-6 py-4 flex items-center gap-4'>
                                <Image src={product.imageUrl} alt={product.name} width={48} height={48} className="w-12 h-12 object-contain rounded-lg bg-gray-100" />
                                <span className="font-medium text-gray-900">{product.name}</span>
                            </td>
                            <td className='px-6 py-4 text-gray-600'><span className="bg-gray-100 px-2 py-1 rounded-lg">{product.category}</span></td>
                            <td className='px-6 py-4 text-gray-600'>Rp {product.price.toLocaleString('id-ID')}</td>
                            <td className='px-6 py-4 text-gray-600'>{product.stock}</td>
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
