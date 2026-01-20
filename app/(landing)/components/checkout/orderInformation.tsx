"use client"

import CardHeader from "../ui/cardheader";
import { useCartStore, CustomerInfo } from "@/app/hooks/use-cart-store";

interface OrderInformationProps {
    formData: CustomerInfo;
    setFormData: React.Dispatch<React.SetStateAction<CustomerInfo>>;
}

export default function OrderInformation({ formData, setFormData }: OrderInformationProps) {
    const setCustomerInfo = useCartStore((state) => state.setCustomerInfo)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const newFormData = {...formData, [e.target.name]: e.target.value}
        setFormData(newFormData)
        setCustomerInfo(newFormData) // Update store
    }

    return (
        <CardHeader title="Order Information">
            <div className='p-4'>
                <div className='flex flex-col gap-5'>
                    <div className='input-group'>
                        <label htmlFor="customerName">Full Name</label>
                        <input 
                            placeholder='Type your full name' 
                            type="text" 
                            id="customerName" 
                            name="customerName"
                            value={formData.customerName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="customerContact">Whatsapp Number</label>
                        <input 
                            placeholder='+62xxxx' 
                            type="text" 
                            id="customerContact" 
                            name="customerContact"
                            value={formData.customerContact}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="customerAddress">Shipping Address</label>
                        <textarea 
                            placeholder='Example Street, 18, West Jakarta, Indonesia, 66521' 
                            id="customerAddress" 
                            name="customerAddress"
                            value={formData.customerAddress}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
            </div>
        </CardHeader>
    )
}
