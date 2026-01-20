export default function Rejected() {
    return (
        <div className='bg-white w-150 h-110 flex flex-col justify-center items-center gap-10 p-10'>
            <div className='flex justify-center items-center aspect-square rounded-full bg-red-100 w-28 h-28'>
                <img src="/icons/rejected.png" alt="rejected" className='w-15 h-15' />
            </div>
            <div className="flex flex-col gap-2">
                <h1 className='font-bold text-black text-2xl text-center'>Order Rejected</h1>
                <p className='text-black text-center'>Unfortunately, your payment could not be verified. Please check your payment details and try again, or contact our support team for assistance.</p>
            </div>
        </div>
    )
}
