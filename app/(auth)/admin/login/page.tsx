'use client'
import Image from 'next/image'
import Button from '@/app/(landing)/components/ui/button'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import login from '@/app/services/auth.service'

export default function LoginPage() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            router.push('/admin/products')
        }
    }, [router])

    const handleLogin = async () => {
        setIsLoading(true)
        try {
            const data = await login({ email, password })
            if (data.token) {
                router.push('/admin/products')
            }
        } catch (err: any) {
            setErrorMessage(err.message || 'Something went wrong. Please try again.')
            console.error('Login error:', err)
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <main className="flex justify-center items-center bg-[#F9FAFB] w-full h-screen">
            <div className="max-w-136 w-full bg-white rounded-xl border-t-4 border-t-primary p-12 gap-12 flex flex-col">
                <div className="flex justify-center items-center flex-col gap-6">
                    <Image src="/logos/sporton-logo-admin.svg" alt="Logo" width={300} height={50} />
                    <p className='text-md text-gray-400'>Please enter your email and password to login</p>
                </div>

                {errorMessage && (
                    <div className='px-3 py-2 bg-primary/10 rounded-md border border-primary/20 text-center '>
                        <div className="text-primary text-sm">{errorMessage}</div>
                    </div>
                )}


                <div className="flex flex-col gap-6">
                    <div className="input-group-login">
                        <label htmlFor="email" className="input-label">Email</label>
                        <input type="email" id="email" className="input-field" placeholder='admin@store.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-group-login">
                        <label htmlFor="password" className="input-label">Password</label>
                        <input type="password" id="password" className="input-field" placeholder='••••••••'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <Button variant="primary" className='rounded-lg px-2 py-4 hover:bg-primary w-full' onClick={handleLogin}>
                    {
                        isLoading ? 'Signing in...' : 'Sign In'
                    }
                </Button>
            </div>
        </main>
    )
}
