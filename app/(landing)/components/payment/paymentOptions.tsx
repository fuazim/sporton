import React from 'react'
import CardHeader from '../ui/cardheader'
import { FiCreditCard } from 'react-icons/fi'

const paymentLists = [
    {
        id: 1,
        name: 'BCA',
        number: '0123182312'
    },
    {
        id: 2,
        name: 'Mandiri',
        number: '83923912013203123'
    },
    {
        id: 3,
        name: 'BTPN',
        number: '5238218923'
    }
]

export default function PaymentOptions() {
    return (
        <CardHeader title="Payment Options">
            {
                paymentLists.map((payment) => (
                    <div key={payment.id}>
                        <div className="p-4 border-b border-gray-200">
                            <div className='flex flex-col gap-5'>
                                <div className='flex flex-row gap-5'>
                                    <div className='aspect-square w-16 h-16 bg-blue-100 flex justify-center items-center text-blue-500'>
                                        <FiCreditCard size={24} />
                                    </div>
                                    <div className="flex flex-col gap-0.5 justify-center items-start flex-1">
                                        <h2 className='text-md font-medium'>{payment.name}</h2>
                                        <p className='text-xs font-medium text-gray-500'>{payment.number}</p>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <h3 className='text-sm font-regular text-black bg-blue-100 py-1 px-3'>Bank Transfer</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }

        </CardHeader>
    )
}