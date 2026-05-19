"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({children,href}) => {

    const pathname = usePathname();
    // console.log(pathname, "pathname");

    const isActive=href===pathname;
    

    return (
        <div>
            <Link href={href} className={`${isActive ? "border-b-2 border-b-[#2563EB] text-[#2563EB] font-semibold" : ""}text-black`}>{children}</Link>
        </div>
    );
};

export default Navlink;