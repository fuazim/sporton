"use client"

import Submitted from "../../components/order-status/submitted";
import Confirm from "../../components/order-status/confirm";
import { useState } from "react";

export default function OrderStatus() {
    const [isConfirmed, setIsConfirmed] = useState(false);
    return (
        <main className='bg-gray-100 min-h-[80vh] py-10'>
            <div className='max-w-5xl mx-auto py-10 flex flex-col gap-10'>
                <h1 className='font-bold text-black text-5xl text-center'>Order Status</h1>
                <div className='flex justify-center items-center'>
                    {isConfirmed ? <Confirm /> : <Submitted />}
                </div>
            </div>
        </main>
    )
}
