import React, { useState } from 'react'
import Modal from '../ui/modal'
import Button from '@/app/(landing)/components/ui/button';
import ImageUploadPreview from '../ui/image-upload-preview';

type TBankInformationModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

export default function BankInformationModal({ isOpen, onClose }: TBankInformationModalProps) {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Add New Bank Information">
            <div className="flex flex-col gap-6">
                <div className='flex gap-4'>
                    <div className="flex flex-col gap-4 w-full">
                        <div className="input-group-admin">
                            <label htmlFor="BankName" className="input-label">Bank Name</label>
                            <input type="text" id="BankName" className="input-field" placeholder='e. g. Mandiri, BCA, BRI' />
                        </div>
                        <div className="input-group-admin w-full">
                            <label htmlFor="AccountNumber" className="input-label">Account Number</label>
                            <input type="text" id="AccountNumber" className="input-field" placeholder='eg. 1234567890' />
                        </div>
                        <div className="input-group-admin w-full">
                            <label htmlFor="AccountHolder" className="input-label">Account Holder</label>
                            <input type="text" id="AccountHolder" className="input-field" placeholder='eg. PT. Sporton Indonesia' />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end gap-4">
                    <Button variant="ghost" className='rounded-lg px-2 py-4' onClick={onClose}>Cancel</Button>
                    <Button variant="primary" className='rounded-lg px-2 py-4 hover:bg-primary/80'>Create Category</Button>
                </div>
            </div>
        </Modal>
    )
}
