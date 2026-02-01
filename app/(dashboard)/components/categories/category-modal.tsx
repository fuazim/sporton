import React, { useState } from 'react'
import Modal from '../ui/modal'
import Button from '@/app/(landing)/components/ui/button';
import ImageUploadPreview from '../ui/image-upload-preview';

type TCategoryModalProps = {
    isOpen: boolean;
    onClose: () => void;
}

export default function CategoryModal({ isOpen, onClose }: TCategoryModalProps) {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Add New Category">
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
                            <label htmlFor="CategoryName" className="input-label">Category Name</label>
                            <input type="text" id="CategoryName" className="input-field" placeholder='eg. Running' />
                        </div>
                        <div className="flex flex-row gap-4">
                            <div className="input-group-admin w-full">
                                <label htmlFor="CategoryDescription" className="input-label">Description</label>
                                <textarea id="CategoryDescription" className="input-field h-full" placeholder='eg. Running shoes' />
                            </div>
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
