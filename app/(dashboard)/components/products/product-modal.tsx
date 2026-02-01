import React, { useState } from 'react'
import Modal from '../ui/modal'
import Button from '@/app/(landing)/components/ui/button';
import ImageUploadPreview from '../ui/image-upload-preview';

type TProductModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

export default function ProductModal({ isOpen, onClose }: TProductModalProps) {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Add New Product">
            <div className="flex flex-col gap-6">
                <div className='flex gap-4'>
                    <div className="min-w-50">
                        <ImageUploadPreview value={imagePreview} onChange={(file) => {
                            setImageFile(file);
                            setImagePreview(URL.createObjectURL(file));
                        }} className='w-full h-full' label='Product Image' />
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <div className="input-group-admin">
                            <label htmlFor="ProductName" className="input-label">Product Name</label>
                            <input type="text" id="ProductName" className="input-field" placeholder='eg. Hyperfast Shoes V2' />
                        </div>
                        <div className="flex flex-row gap-4">
                            <div className="input-group-admin w-full">
                                <label htmlFor="ProductPrice" className="input-label">Price (IDR)</label>
                                <input type="number" id="ProductPrice" className="input-field" placeholder='eg. 1200000' />
                            </div>
                            <div className="input-group-admin w-full">
                                <label htmlFor="ProductStock" className="input-label">Stock</label>
                                <input type="number" id="ProductStock" className="input-field" placeholder='eg. 12' />
                            </div>
                        </div>
                        <div className="input-group-admin">
                            <label htmlFor="ProductCategory" className="input-label">Category</label>
                            <select id="ProductCategory" className="input-field">
                                <option value="" disabled selected>Select Category</option>
                                <option value="Running">Running</option>
                                <option value="Football">Football</option>
                                <option value="Basketball">Basketball</option>
                                <option value="Badminton">Badminton</option>
                                <option value="Table Tennis">Table Tennis</option>
                                <option value="Accessories">Accessories</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="input-group-admin">
                    <label htmlFor="ProductDescription" className="input-label">Description</label>
                    <textarea id="ProductDescription" className="input-field h-50" placeholder='product description...' />
                </div>
                <div className="flex justify-end gap-4">
                    <Button variant="ghost" className='rounded-lg px-2 py-4' onClick={onClose}>Cancel</Button>
                    <Button variant="primary" className='rounded-lg px-2 py-4 hover:bg-primary/80'>Create Product</Button>
                </div>
            </div>
        </Modal>
    )
}
