import React from 'react'
import OrderInformation from '../components/checkout/orderInformation'
import CartItems from '../components/checkout/cartItems'

export default function Checkout() {
  return (
    <main className='bg-gray-100 min-h-[80vh] py-10'>
      <div className='max-w-5xl mx-auto py-10 flex flex-col gap-10'>
        <h1 className='font-bold text-black text-5xl text-center'>Checkout Now</h1>
        <div className='flex flex-row gap-15'>
          <OrderInformation/>
          <CartItems/>
        </div>
      </div>
    </main>
  )
}
