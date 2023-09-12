"use client"

import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
    return (
        <nav className='p-4'>
            <div className='container mx-auto flex justify-between items-center'>
                <div className=" text-2xl font-semibold">
                    <Image
                        src="/assets/t-logo.png"
                        alt="Logo"
                        width={50}
                        height={50}
                        className='object-contain'
                    />
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/">
                            <span className="">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <span className="">About</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <span className="">Contact</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav