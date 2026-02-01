import React, { useState } from 'react'
import Modal from '../ui/modal'
import Button from '@/app/(landing)/components/ui/button';
import ImageUploadPreview from '../ui/image-upload-preview';
import Image from 'next/image';
import { FiCheck, FiX } from 'react-icons/fi';

type TTransactionModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

export default function TransactionModal({ isOpen, onClose }: TTransactionModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Verify Transaction">
            <div className="flex flex-row gap-6">
                <div className='flex flex-col gap-2'>
                    <h4 className='font-semibold text-sm'>Payment Proof</h4>
                    <Image src="/images/transaction-proof.png" alt="Payment Proof" className='w-full h-full' width={200} height={400} />
                </div>
                <div className='flex flex-col gap-6 w-full'>
                    <div className='flex flex-col gap-2'>
                        <h4 className='font-semibold text-sm'>Order Details</h4>
                        <div className='flex flex-col gap-2 bg-gray-100 px-2 py-4 rounded-xl'>
                            <div className='flex flex-row gap-2'>
                                <span className='font-medium text-xs text-gray-400 w-1/2'>Date</span>
                                <span className='text-xs w-1/2 text-black'>01/01/2022 19:29</span>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <span className='font-medium text-xs text-gray-400 w-1/2'>Customer</span>
                                <span className='text-xs w-1/2 text-black'>John Doe</span>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <span className='font-medium text-xs text-gray-400 w-1/2'>Contact</span>
                                <span className='text-xs w-1/2 text-black'>08123456789</span>
                            </div>
                            <div className='flex flex-row gap-2'>
                                <span className='font-medium text-xs text-gray-400 w-1/2'>Shipping Address</span>
                                <span className='text-xs w-1/2 text-black'>Jl. Sudirman No. 123, Jakarta Selatan</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className='font-semibold text-sm'>Item Purchased</h4>
                        <div className='flex flex-row gap-2 p-2 border border-gray-200 rounded-xl justify-between bg-white'>
                            <div className='flex flex-row justify-center items-center gap-3'>
                                <Image src={"/products/hyperfast-shoes-2.png"} alt="Transaction Item" width={50} height={50} className='aspect-square w-10 h-10 object-contain rounded-lg bg-gray-200' />
                                <h5 className='font-semibold text-black text-sm'>Hyperfast Shoes</h5>
                            </div>
                            <div className='flex flex-row justify-center items-center'>
                                <p className='text-sm font-semibold'>3 Units</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center'>
                        <p className='font-semibold text-sm'>Total</p>
                        <p className='font-semibold text-primary text-sm'>{Number(900000).toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 })}</p>
                    </div>
                    <div className='flex flex-row gap-4 justify-end'>
                        <Button variant="ghost" className='w-40! h-10 rounded-lg bg-red-500/15! text-red-500 hover:bg-red-500/70'><FiX size={20} /> Reject</Button>
                        <Button variant="primary" className='w-40! h-10 rounded-lg bg-green-500! text-white! hover:bg-green-500/70'><FiCheck size={20} /> Approve</Button>
                    </div>

                </div>

            </div>
        </Modal>
    )
}
