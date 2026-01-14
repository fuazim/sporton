export default function OrderInformation() {
  return (
    <div className='bg-white w-full h-150'>
        <div className='p-4 border-b border-gray-200'>
            <h2 className='text-lg font-bold'>Order Information</h2>
        </div>
        <div className='p-4'>
            <div className='flex flex-col gap-5'>
                <div className='input-group'>
                    <label htmlFor="fullName">Full Name</label>
                    <input placeholder='Type your full name' type="text" id="fullName" />
                </div>
                <div className='input-group'>
                    <label htmlFor="whatsappNumber">Whatsapp Number</label>
                    <input placeholder='+62xxxx' type="text" id="whatsappNumber" />
                </div>
                <div className='input-group'>
                    <label htmlFor="shippingAddress">Shipping Address</label>
                    <textarea placeholder='Example Street, 18, West Jakarta, Indonesia, 66521' id="shippingAddress" />
                </div>
            </div>
        </div>
    </div>
  )
}
