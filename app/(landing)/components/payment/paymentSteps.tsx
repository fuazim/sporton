"use client"

import React, { useState } from 'react'
import CardHeader from '../ui/cardheader'
import { FiCheckCircle } from 'react-icons/fi'
import Upload from '../ui/upload'
import Button from '../ui/button'
import { useRouter } from 'next/navigation'
import { useCartStore } from '@/app/hooks/use-cart-store'
import { transactionCheckout } from '@/app/services/transaction.service'

export default function PaymentSteps() {
    const { push } = useRouter()
    const cartItems = useCartStore((state) => state.items)
    const customerInfo = useCartStore((state) => state.customerInfo)
    const reset = useCartStore((state) => state.reset)
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const [file, setFile] = useState<File | null>(null)
    
    const handleConfirmPayment = async () => {
        if (!file) {
            alert("Please upload your payment receipt!");
            return;
        }

        if (!customerInfo) {
            alert("Customer information is missing, please return to checkout");
            push("/checkout");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("customerName", customerInfo.customerName);
            formData.append("customerContact", customerInfo.customerContact.toString());
            formData.append("customerAddress", customerInfo.customerAddress);
            formData.append("image", file);
            formData.append("purchasedItems", 
                JSON.stringify(cartItems.map((item) => ({ productId: item._id, qty: item.quantity })))
            );
            formData.append("totalPayment", total.toString());

            const transaction = await transactionCheckout(formData);
            alert("Transaction created successfully!");
            reset();
            push(`/order-status/${transaction._id}`);
        } catch (error) {
            console.log(error);
            alert("Failed to create transaction. Please try again.");
        }
    }
    
    return (
        <CardHeader title="Payment Steps">
            <div className="p-4">
                <div className='flex flex-col gap-5'>
                    <div className='text-sm font-regular text-black'>
                        <ol className='list-decimal pl-4 flex flex-col gap-4'>
                            <li>
                                Transfer the total amount of <span className='text-primary font-bold'>IDR {total.toLocaleString('id-ID')}</span> to your preferred bank account listed under 'Payment Options' (BCA, Mandiri, or BTPN).
                            </li>
                            <li>
                                After completing the transfer, <span className='font-bold'>keep the payment receipt</span> or a screenshot of the transfer confirmation. This will be needed for the next step.
                            </li>
                            <li>
                                Upload the payment receipt/screenshot using the <span className='font-bold'>Upload Receipt &amp; Confirm</span> button below to validate your transaction.
                            </li>
                        </ol>
                    </div>
                    <div>
                        <Upload onFileSelect={(selectedFile) => setFile(selectedFile)} />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-6 p-4 border-t border-gray-200'>
                <div className='flex justify-between'>
                    <div className='font-semibold text-black text-xs'>Total</div>
                    <div className='font-semibold text-primary text-xs'>IDR {total.toLocaleString('id-ID')}</div>
                </div>
                <Button variant="dark" className='w-full' onClick={handleConfirmPayment}><FiCheckCircle size={18} /> Upload Receipt &amp; Confirm</Button>
            </div>
        </CardHeader>
    )
}