"use client"

import React from 'react'
import Button from '../ui/button'
import { FiRefreshCcw } from 'react-icons/fi'

export default function Submitted() {
    const reloadOrderStatus = () => {
        window.location.reload();
    };

    return (
        <div className='bg-white w-150 h-110 flex flex-col justify-center items-center gap-10 p-10'>
            <div className='flex justify-center items-center aspect-square rounded-full bg-blue-100 w-28 h-28'>
                <img src="/icons/submitted.png" alt="submitted" className='w-15 h-15' />
            </div>
            <div className="flex flex-col gap-2">
                <h1 className='font-bold text-black text-2xl text-center'>Order Submitted</h1>
                <p className='text-black text-center'>Your Order is recorded in our system, we are still confirming the payment status, please wait and your order status will be updated in less than 12 hours.</p>
            </div>
            <Button variant="dark" className='w-100 py-4' onClick={reloadOrderStatus}>
                <FiRefreshCcw />
                Refresh Order Status
            </Button>
        </div>
    )
}
