import React, { useRef } from 'react'
import { FiUpload } from 'react-icons/fi'
import Image from 'next/image';

type TImageUploadPreviewProps = {
    label?: string;
    value?: string | null;
    onChange: (file: File) => void;
    className?: string;
}

export default function ImageUploadPreview({ className, label, value, onChange }: TImageUploadPreviewProps) {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageClick = () => {
        fileInputRef.current?.click();
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            onChange(file);
        }
    };
    return (
        <div className={className}>
            <div className="border-2 border-dashed border-primary bg-primary/5 rounded-lg p-10 flex flex-col items-center justify-center h-50" onClick={handleImageClick}>
                {
                    value ? (
                        <Image src={value} width={200} height={200} alt="Preview" className="w-full h-full object-contain" />
                    ) : (
                        <>
                            <FiUpload size={24} className="text-primary mb-2" />
                            <p className="text-sm font-medium text-gray-500">Click to Upload</p>
                        </>
                    )
                }
                <input type="file" ref={fileInputRef} onChange={handleImageChange} className="hidden" accept="image/*" />
            </div>
        </div>

    )
}
