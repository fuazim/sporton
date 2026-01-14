import React from 'react'
import Button from '../ui/button'
import { FiFastForward } from 'react-icons/fi'
import { IoIosPlay } from "react-icons/io";
import Image from 'next/image'

export default function Hero() {
  return (
    <section className='container mx-auto h-screen flex'>
        <div className='relative self-center w-full'>
            <div className='relative ml-40 space-y-6 z-10'>
                <div className="text-primary italic">Friday Sale, 50%</div>
                <h1 className='-ml-3 pr-6 text-8xl font-extrabold italic bg-linear-to-b from-black to-[#c7c7c7] bg-clip-text text-transparent'>WEAR YOUR<br/>TOP-QUALITY<br/>SPORTSWEAR</h1>
                <p className='text-medium font-medium'>Engineered for endurance and designed for speed. Experience gear <br/> that moves as fast as you do. Premium fabrics. Unmatched comfort. <br/> Limitless motion.</p>
                <div className='flex gap-5'>
                    <Button>Explore More <FiFastForward size={16}/></Button>
                    <Button variant='ghost'>Watch Video <span className='bg-white border-6 border-gray-100 rounded-full p-2'><IoIosPlay size={16}/></span></Button>
                </div>
            </div>
            <Image src="/images/hero-2.png" alt="Hero Image" width={500} height={500} className='absolute right-50 top-1/2 -translate-y-1/2 z-20' />
        </div>
        <Image src="/images/ornament.png" alt="Ornament" width={400} height={400} className='absolute -right-60 top-1/2 -translate-y-1/2' />
        <Image src="/images/basketball.webp" alt="Basketball" width={300} height={300} className='grayscale opacity-10 absolute -left-[-80pxs] top-30' />
    </section>
  )
}
