"use client"

import React from 'react'
import CardHeader from '../ui/cardheader'
import { FiCheckCircle, FiCreditCard } from 'react-icons/fi'
import Upload from '../ui/upload'
import { cartItems as cartLists } from '../ui/cartpopup'
import Button from '../ui/button'
import { useRouter } from 'next/navigation'

export default function PaymentSteps() {
    const { push } = useRouter()
    const uploadAndConfirm = () => {
        push('/order-status/12121212')
    }
    const total = cartLists.reduce((acc, item) => acc + item.price * item.qty, 0)
    return (
        <CardHeader title="Payment Steps">
            <div className="p-4">
                <div className='flex flex-col gap-5'>
                    <div className='text-sm font-regular text-black'>
                        <ol className='list-decimal pl-4 flex flex-col gap-4'>
                            <li>
                                Transfer the total amount of <span className='text-primary font-bold'>Rp. 1.035.000</span> to your preferred bank account listed under 'Payment Options' (BCA, Mandiri, or BTPN).
                            </li>
                            <li>
                                After completing the transfer, <span className='font-bold'>keep the payment receipt</span> or a screenshot of the transfer confirmation. This will be needed for the next step.
                            </li>
                            <li>
                                Upload the payment receipt/screenshot using the <span className='font-bold'>Upload Receipt & Confirm</span> button below to validate your transaction.
                            </li>
                        </ol>
                    </div>
                    <div>
                        <Upload />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-6 p-4 border-t border-gray-200'>
                <div className='flex justify-between'>
                    <div className='font-semibold text-black text-xs'>Total</div>
                    <div className='font-semibold text-primary text-xs'>IDR {total.toLocaleString('id-ID')}</div>
                </div>
                <Button variant="dark" className='w-full' onClick={uploadAndConfirm}><FiCheckCircle size={18} /> Upload Receipt & Confirm</Button>
            </div>
        </CardHeader>
    )
}