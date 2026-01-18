export default function Confirm() {
    return (
        <div className='bg-white w-150 h-110 flex flex-col justify-center items-center gap-10 p-10'>
            <div className='flex justify-center items-center aspect-square rounded-full bg-green-100 w-28 h-28'>
                <img src="/icons/confirm.png" alt="confirm" className='w-15 h-15' />
            </div>
            <div className="flex flex-col gap-2">
                <h1 className='font-bold text-black text-2xl text-center'>Order Confirmed</h1>
                <p className='text-black text-center'>We have received your payment, and your order is currently processed by our staff, just wait until your favorite sportswear arrive in your home. We will contact you in Whatsapp for further shipping updates..</p>
            </div>
        </div>
    )
}
