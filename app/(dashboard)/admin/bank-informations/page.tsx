'use client'

import { useState } from 'react'
import Button from '@/app/(landing)/components/ui/button'
import { FiPlus } from 'react-icons/fi'
import BankInformationTable from '@/app/(dashboard)/components/bank-informations/bank-information-table'
import BankInformationModal from '@/app/(dashboard)/components/bank-informations/bank-information-modal'

export default function BankInformationManagement() {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => setIsOpen(false);
    const handleOpen = () => setIsOpen(true);

    return (
        <div>
            <div className="flex justify-between items-center mb-10">
                <div className="flex flex-col gap-1s">
                    <h1 className="text-3xl font-semibold">Bank Information</h1>
                    <p className="text-lg text-gray-400">Manage destination accounts for customer transfers.</p>
                </div>
                <Button variant="primary" className='rounded-lg px-2 py-4 hover:bg-primary/80' onClick={handleOpen}> <FiPlus size={24} /> Add Bank Account</Button>
            </div>
            <BankInformationTable />
            <BankInformationModal isOpen={isOpen} onClose={handleClose} />
        </div>
    )
}
