"use client"
import Link from 'next/link';
import React from 'react';
import Navlink from './Navlink';
import logo from '../../assets/docappointlogo.png'
import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { authClient, signOut } from '@/lib/auth-client';
import { Avatar } from '@heroui/react';
import toast from 'react-hot-toast';

const Navbar = () => {

   const router = useRouter()

  const userData=authClient.useSession()
  // console.log(userData,"User Info");
  const user=userData.data?.user
  // console.log(user);

  const handleSignOut=async()=>{

    await signOut();
    // router.push('/'); // redirect to home page
    window.location.href = '/';
    toast.success("Successfully Logged out");
  }

    return (
        <div className='bg-white shadow-sm'>
            <div className="md:w-10/12 mx-auto navbar ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Navlink href={'/'}>Home</Navlink></li>
        <li>
         <Navlink href={'/doctors'}>All Appointments</Navlink>
        </li>
        <li> <Navlink href={'/dashboard'}>Dashboard</Navlink></li>
      </ul>
    </div>
   <Image 
  src={logo} 
  alt="logo" 
  width={400} 
  height={400}
  className="h-12 w-auto object-contain"
/>

    
    <h2 className='text-[#2563EB] text-3xl font-bold hidden lg:flex'>DocAppoint</h2>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Navlink href={'/'}>Home</Navlink></li>
      <li>
         <Navlink href={'/doctors'}>All Appointments</Navlink>
      </li>
      <li><Navlink href={'/dashboard'}>Dashboard</Navlink></li>
    </ul>
  </div>
  <div className="navbar-end">
    
  {!user &&  <div>
        <button className='btn bg-[#2563EB] text-white rounded-full'>
        <Link href={'/login'}>Login</Link>
    </button>

      <button className='btn bg-[#2563EB] text-white rounded-full'>
          <Link href={'/register'}>Register</Link>
      </button>
    </div> }

    {
      user && <div className='flex items-center gap-2'>
        <Avatar>
        <Avatar.Image  alt="John Doe" src={user?.image} referrerPolicy='no-referrer' />
        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
      </Avatar>
      
        <button onClick={handleSignOut} className='btn bg-[#2563EB] text-white rounded-full'>Log Out</button>

      </div>
    }

     {/* <button className='btn bg-[#2563EB] text-white rounded-full'>
        <Link href={'/login'}>Login</Link>
    </button>

      <button className='btn bg-[#2563EB] text-white rounded-full'>
          <Link href={'/register'}>Register</Link>
      </button> */}

  </div>
</div>
        </div>
    );
};

export default Navbar;