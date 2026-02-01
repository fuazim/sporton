import React from 'react'
import { FiX } from 'react-icons/fi'

type TModalProps = {
    title: string;
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export default function Modal({ title, children, isOpen, onClose }: TModalProps) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out" onClick={onClose}>
            <div className="bg-white rounded-xl w-full max-w-2xl shadow-xl mx-auto" onClick={(e) => e.stopPropagation()}>
                <div className="p-7 flex justify-between items-center border-b border-gray-200">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700" onClick={onClose}>
                        <FiX size={20} />
                    </button>
                </div>
                <div className="p-7">
                    {children}
                </div>
            </div>
        </div>

    )
}
