import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark-alternate">
      <div className="container mx-auto pt-10">
        <div className="flex justify-between items-start pb-10">
          <div className="flex flex-col gap-4 max-w-sm">
            <Image
              src="/logos/sporton-logo-footer.svg"
              alt="Sporton Logo"
              width={127}
              height={30}
            />
            <p className="text-white text-sm">
              Engineered for endurance and designed for speed.
              <br />
              Experience gear that moves as fast as you do.
            </p>
          </div>
          <div className="flex gap-20">
            <div className="flex flex-col gap-4 items-start text-left w-32">
              <Link href="#" className="text-white text-sm">Home</Link>
              <Link href="#" className="text-white text-sm">Products</Link>
              <Link href="#" className="text-white text-sm">About</Link>
              <Link href="#" className="text-white text-sm">Contact</Link>
            </div>
            <div className="flex flex-col gap-4 items-start text-left w-32">
              <Link href="#" className="text-white text-sm">Instagram</Link>
              <Link href="#" className="text-white text-sm">Facebook</Link>
              <Link href="#" className="text-white text-sm">Tiktok</Link>
              <Link href="#" className="text-white text-sm">Youtube</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto flex justify-between items-start py-10 ">
          <p className="text-white text-sm">
            SportsOn © 2025 All Rights Reserved.
          </p>
          <div className="flex gap-20">
            <div className="flex flex-col items-start text-left w-32">
              <Link href="#" className="text-white text-sm">Privacy Policy</Link>
            </div>
            <div className="flex flex-col items-start text-left w-32">
              <Link href="#" className="text-white text-sm">Terms Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
