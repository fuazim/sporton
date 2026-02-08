"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const router = useRouter()
    const [isLoading, setIsLoading] = React.useState(true)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            router.push('/admin/login')
        } else {
            setIsLoading(false)
        }
    }, [router])

    if (isLoading) {
        return <div className='min-h-screen flex items-center justify-center bg-gray-50 '>
            <div className="animate-spin rounded-full border-4 border-gray-200 border-t-primary h-12 w-12"></div>
        </div>
    }

    return (
        <>{children}</>
    )
}
