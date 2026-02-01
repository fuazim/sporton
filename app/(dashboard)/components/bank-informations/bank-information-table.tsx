import React from 'react'
import Image from 'next/image'
import { FiCreditCard, FiEdit2, FiTrash2 } from 'react-icons/fi'
import Button from '@/app/(landing)/components/ui/button'

export default function BankInformationTable() {
    const bankInformations = [
        {
            _id: "1",
            bankName: "Bank BCA",
            accountNumber: "8293938183",
            accountHolder: "PT. Sporton Indonesia",
        },
        {
            _id: "2",
            bankName: "Bank Mandiri",
            accountNumber: "123000928374",
            accountHolder: "PT. Sporton Indonesia",
        },
        {
            _id: "3",
            bankName: "Bank BNI",
            accountNumber: "0293849201",
            accountHolder: "PT. Sporton Indonesia",
        },
        {
            _id: "4",
            bankName: "Bank BRI",
            accountNumber: "3829102938492",
            accountHolder: "PT. Sporton Indonesia",
        },
        {
            _id: "5",
            bankName: "Bank Mega",
            accountNumber: "92839283",
            accountHolder: "PT. Sporton Indonesia",
        },
        {
            _id: "6",
            bankName: "Bank CIMB Niaga",
            accountNumber: "19293849292",
            accountHolder: "PT. Sporton Indonesia",
        },
    ]

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bankInformations.map((bankInformation, index) => (
                <div key={bankInformation._id} className="flex flex-col border border-gray-200 rounded-xl bg-white">
                    <div className='flex flex-col px-5 pt-5'>
                        <div className='flex flex-row justify-between items-center'>
                            <div className="flex gap-2 justify-center items-center">
                                <div className='bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center text-blue-600'>
                                    <FiCreditCard size={24} />
                                </div>
                                <div className='flex flex-col'>
                                    <h4 className='font-semibold text-md'>{bankInformation.bankName}</h4>
                                    <p className='text-sm text-gray-500'>Bank Transfer</p>
                                </div>
                            </div>
                            <div className='flex flex-row h-full justify-end items-start gap-4'>
                                <Button variant="ghost" className='p-0! rounded-lg px-2 py-2 h-auto hover:bg-gray-100 hover:text-gray-600'><FiEdit2 size={24} /></Button>
                                <Button variant="ghost" className='p-0! rounded-lg px-2 py-2 h-auto hover:bg-gray-100 hover:text-gray-600'><FiTrash2 size={24} /></Button>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col border-b border-gray-200 p-5'>
                        <div className='flex flex-col'>
                            <span className='text-md text-gray-500'>Account Number</span>
                            <h4 className='font-semibold text-md'>{bankInformation.accountNumber}</h4>
                        </div>
                    </div>
                    <div className='flex flex-col p-5 gap-4'>
                        <div className='flex flex-row justify-start items-center gap-1'>
                            <span className='text-sm text-gray-500'>Holder:</span>
                            <h4 className='font-semibold text-sm'>{bankInformation.accountHolder}</h4>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
