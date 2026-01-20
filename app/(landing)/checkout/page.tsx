"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import OrderInformation from '../components/checkout/orderInformation'
import CartItems from '../components/checkout/cartItems'
import { CustomerInfo, useCartStore } from '@/app/hooks/use-cart-store'

export default function Checkout() {
  const { push } = useRouter()
  const cartItems = useCartStore((state) => state.items)
  const setCustomerInfo = useCartStore((state) => state.setCustomerInfo)
  
  const [formData, setFormData] = useState<CustomerInfo>({
    customerName: "",
    customerContact: "",
    customerAddress: ""
  })

  const handlePayment = () => {
    // Validate form data
    if (
      !formData.customerName ||
      !formData.customerContact ||
      !formData.customerAddress
    ) {
      alert("Please fill in all fields");
      return;
    }

    // Validate cart
    if (cartItems.length === 0) {
      alert("Your cart is empty")
      return
    }

    // Save customer info to store before proceeding
    setCustomerInfo(formData)

    // Proceed to payment
    push('/payment')
  }

  return (
    <main className='bg-gray-100 min-h-[80vh] py-10'>
      <div className='max-w-5xl mx-auto py-10 flex flex-col gap-10'>
        <h1 className='font-bold text-black text-5xl text-center'>Checkout Now</h1>
        <div className='flex flex-row gap-15'>
          <OrderInformation formData={formData} setFormData={setFormData} />
          <CartItems handlePayment={handlePayment} />
        </div>
      </div>
    </main>
  )
}



