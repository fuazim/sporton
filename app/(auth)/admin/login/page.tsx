'use client'
import Image from 'next/image'
import Button from '@/app/(landing)/components/ui/button'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
    const router = useRouter()
    return (
        <main className="flex justify-center items-center bg-[#F9FAFB] w-full h-screen">
            <div className="max-w-136 w-full bg-white rounded-xl border-t-4 border-t-primary p-12 gap-12 flex flex-col">
                <div className="flex justify-center items-center flex-col gap-6">
                    <Image src="/logos/sporton-logo-admin.svg" alt="Logo" width={300} height={50} />
                    <p className='text-md text-gray-400'>Please enter your email and password to login</p>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="input-group-login">
                        <label htmlFor="email" className="input-label">Email</label>
                        <input type="email" id="email" className="input-field" placeholder='admin@store.com' />
                    </div>
                    <div className="input-group-login">
                        <label htmlFor="password" className="input-label">Password</label>
                        <input type="password" id="password" className="input-field" placeholder='••••••••' />
                    </div>
                </div>
                <Button variant="primary" className='rounded-lg px-2 py-4 hover:bg-primary w-full' onClick={() => router.push('/admin/products')}>Sign In</Button>
            </div>
        </main>
    )
}
