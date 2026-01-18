import React from 'react'

type CardHeaderProps = {
    title: string
    children: React.ReactNode
}

export default function CardHeader({ title, children }: CardHeaderProps) {
    return (
        <div className='flex flex-col bg-white w-full'>
            <div className='p-4 border-b border-gray-200'>
                <h2 className='text-lg font-bold'>{title}</h2>
            </div>
            {children}
        </div>
    )
}