import React from 'react'
import Image from 'next/image'
import { FiEdit2, FiEye, FiTrash2 } from 'react-icons/fi'
import Button from '@/app/(landing)/components/ui/button'

type TransactionTableProps = {
    onViewDetails: () => void
}

export default function TransactionTable({ onViewDetails }: TransactionTableProps) {
    const transactions = [
        {
            _id: "1",
            date: "01/01/2022",
            customer: "John Doe",
            contact: "08123456789",
            total: "900000",
            status: "Approved"
        },
        {
            _id: "2",
            date: "01/01/2022",
            customer: "Jane Doe",
            contact: "08123456789",
            total: "192000",
            status: "Pending"
        },
        {
            _id: "3",
            date: "01/01/2022",
            customer: "Jhinge Doe",
            contact: "08123456789",
            total: "913900",
            status: "Rejected"
        },
        {
            _id: "4",
            date: "01/01/2022",
            customer: "Sung Jin-woo",
            contact: "08123456789",
            total: "9192838",
            status: "Approved"
        },
        {
            _id: "5",
            date: "01/01/2022",
            customer: "Jin Dae",
            contact: "08123456789",
            total: "9193913",
            status: "Rejected"
        },
        {
            _id: "6",
            date: "01/01/2022",
            customer: "John Doe",
            contact: "08123456789",
            total: "9193913",
            status: "Approved"
        },
    ]

    return (
        <div className="bg-white rounded-xl border border-gray-200">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-gray-200">
                        <th className='px-6 py-4 font-semibold'>Date</th>
                        <th className='px-6 py-4 font-semibold'>Customer</th>
                        <th className='px-6 py-4 font-semibold'>Contact</th>
                        <th className='px-6 py-4 font-semibold'>Total</th>
                        <th className='px-6 py-4 font-semibold'>Status</th>
                        <th className='px-6 py-4 font-semibold'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction._id} className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50">
                            <td className='px-6 py-4 flex items-center gap-4'>
                                <span className="font-medium text-gray-900">{transaction.date}</span>
                            </td>
                            <td className='px-6 py-4 text-gray-600'>{transaction.customer}</td>
                            <td className='px-6 py-4 text-gray-600'>{transaction.contact}</td>
                            <td className='px-6 py-4 text-gray-600'>{Number(transaction.total).toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</td>
                            <td className='px-6 py-4 text-gray-600'><span className={`px-3 py-2 rounded-full text-white ${transaction.status === "Approved" ? "bg-green-500" : transaction.status === "Pending" ? "bg-yellow-500" : "bg-red-500"}`}>{transaction.status}</span></td>
                            <td className='px-6 py-4 text-gray-600'>
                                <div className="flex gap-4">
                                    <Button className='p-0!' variant="ghost" onClick={onViewDetails}><FiEye size={20} /> <span className='text-sm'>View Details</span></Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
