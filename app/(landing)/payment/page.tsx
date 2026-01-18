import PaymentOptions from '../components/payment/paymentOptions'
import PaymentSteps from '../components/payment/paymentSteps'

export default function Payment() {
  return (
    <main className='bg-gray-100 min-h-[80vh] py-10'>
      <div className='max-w-5xl mx-auto py-10 flex flex-col gap-10'>
        <h1 className='font-bold text-black text-5xl text-center'>Payment</h1>
        <div className='flex flex-row gap-15'>
          <PaymentOptions />
          <PaymentSteps />
        </div>
      </div>
    </main>
  )
}
