import Image from 'next/image'
import ProductAction from '@/app/(landing)/components/product-details/product-action'

export default function ProductDetail() {
  return (
    <main className="container mx-auto py-40 flex flex-row gap-12">
        <div className='bg-primary-light aspect-square min-w-140 flex items-center justify-center'>
            <Image src="/products/rocket-tennis-2.png" alt="Rocket Tennis" width={500} height={500} className='aspect-square object-contain w-full h-full' />
        </div>
        <div className='flex flex-col gap-6 pr-40 align-center justify-center'>
            <h1 className='font-bold text-5xl'>Rocket Tennis</h1>
            <div className='bg-primary-light text-primary text-m font-medium rounded-full py-2 px-4 inline-flex w-fit'>
                Tennis
            </div>
            <p className='text-medium font-medium leading-loose'>The SportsOn HyperSoccer v2 is engineered for the player who demands precision, power, and unrivaled speed on the pitch. Featuring a striking, two-toned black and white design with deep crimson accents, these cleats don't just perform—they make a statement. Experience the future of football footwear with v2's enhanced fit and cutting-edge traction.</p>
            <h2 className='font-bold text-primary text-3xl'>IDR 500.000</h2>
            <ProductAction/>
        </div>
    </main>
  )
}
