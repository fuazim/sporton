"use client"

import React, { useState, useRef } from 'react'
import { FiUploadCloud, FiX, FiFile } from 'react-icons/fi'

type TFileUploadProps = {
    onFileSelect?: (file: File | null) => void;
    accept?: string;
    maxSizeMB?: number;
};

export default function Upload({ onFileSelect, accept = "image/*", maxSizeMB = 10 }: TFileUploadProps) {
    const [file, setFile] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleFileChange = (selectedFile?: File) => {
        if (!selectedFile) return;

        // Validate file size
        const maxSizeBytes = maxSizeMB * 1024 * 1024;
        if (selectedFile.size > maxSizeBytes) {
            setError(`File size must be less than ${maxSizeMB}MB`);
            return;
        }

        setError(null);
        setFile(selectedFile);
        onFileSelect?.(selectedFile);
    };

    const removeFile = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setFile(null);
        setError(null);
        onFileSelect?.(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) {
            handleFileChange(droppedFile);
        }
    };

    const formatFileSize = (bytes: number): string => {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
        return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
    };

    return (
        <div className="w-full">
            <input
                type="file"
                ref={fileInputRef}
                onChange={(e) => handleFileChange(e.target.files?.[0])}
                accept={accept}
                className="hidden"
            />

            {!file ? (
                <div
                    onClick={handleClick}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    className='flex flex-col justify-center items-center border border-dashed border-primary bg-primary-light rounded-lg p-6 w-full cursor-pointer hover:bg-primary/10 transition-colors'
                >
                    <div className="text-center">
                        <FiUploadCloud size={32} className='text-primary mx-auto mb-3' />
                        <p className='text-sm font-medium text-black mb-1'>Upload your Payment Receipt Here</p>
                    </div>
                </div>
            ) : (
                <div className='flex items-center justify-between border border-primary bg-primary-light rounded-lg p-4 w-full'>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/20 rounded-lg">
                            <FiFile size={20} className='text-primary' />
                        </div>
                        <div>
                            <p className='text-sm font-medium text-black truncate max-w-[200px]'>{file.name}</p>
                            <p className='text-xs text-gray-500'>{formatFileSize(file.size)}</p>
                        </div>
                    </div>
                    <button
                        onClick={removeFile}
                        className="p-1.5 hover:bg-red-100 rounded-full transition-colors"
                        type="button"
                    >
                        <FiX size={18} className='text-red-500' />
                    </button>
                </div>
            )}

            {error && (
                <p className="text-xs text-red-500 mt-2">{error}</p>
            )}
        </div>
    )
}