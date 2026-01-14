import { cartItems as cartLists } from '../ui/cartpopup'
import Image from 'next/image'
import Button from '../ui/button'
import { FiTrash2, FiCreditCard } from 'react-icons/fi'

export default function CartItems() {
  const total = cartLists.reduce((acc, item) => acc + item.price * item.qty, 0)
  return (
    <div className='flex flex-col bg-white w-full h-150 justify-between'>
        <div className='p-4 border-b border-gray-200'>
            <h2 className='text-lg font-bold'>Cart Items</h2>
        </div>
        <div className="flex flex-col flex-1 overflow-auto">
            {
                cartLists.map((item) => (
                        <div className='border-b border-gray-200 p-4 flex gap-3 items-center justify-between' key={item.id}>
                            <div className='bg-primary-light aspect-square w-16 h-16 flex justify-center items-center'>
                                <Image src={`/products/${item.imageURL}`} alt={item.name} width={60} height={60} className='object-contain aspect-square' />
                            </div>
                            <div className='flex flex-col gap-1 items-start flex-1'>
                                <h2 className='text-md font-medium'>{item.name}</h2>
                                <div className='flex flex-row gap-3'>
                                    <p className='text-xs font-medium'>{item.qty}x</p>
                                    <p className='text-xs font-medium text-primary'>IDR {item.price.toLocaleString('id-ID')}</p>
                                </div>
                            </div>
                            <Button variant="ghost" className='w-7 h-7 p-0! self-center ml-auto'>
                                <FiTrash2 size={16}/>
                            </Button>
                        </div>
                    ))
                }
        </div>
        <div className='flex flex-col gap-6 p-4 border-t border-gray-200'>
            <div className='flex justify-between'>
                <div className='font-semibold text-black text-xs'>Total</div>
                <div className='font-semibold text-primary text-xs'>IDR {total.toLocaleString('id-ID')}</div>
            </div>
            <Button variant="dark" className='w-full'><FiCreditCard size={18}    /> Proceed to Payment</Button>
        </div>

    </div>
  )
}
