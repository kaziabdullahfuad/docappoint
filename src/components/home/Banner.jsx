import banner from "@/assets/banner.png"
import Link from "next/link";
import { FaFireFlameCurved } from "react-icons/fa6";

import React from 'react';
import { GiCheckMark } from "react-icons/gi";

const Banner = () => {
    return (
        <div className="bg-[#F9F7F2] ">
            <div
  className="   hero min-h-[70vh]"
  style={{
    backgroundImage: `url(${banner.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <span className="bg-[#004AC6]/60 rounded-full p-3 w-fit border font-bold">Trusted by 50,000+ Patients</span>
      <h1 className="mb-5 text-5xl font-bold mt-4">Healthcare at your <span className="text-[#2563EB]"> Fingertips.</span></h1>
      <p className="mb-5 text-xl">
        Experience a new era of medical care with instant bookings, verified specialist doctors, and 24/7 digital support for your peace of mind.
      </p>
     
      <button className="btn bg-[#2563EB] text-white font-semibold">
        <Link href={'/products'}>See All Doctors</Link>
      </button>
      <button className="btn ml-3 bg-[#2563EB] text-white font-semibold">
        <Link href={'/products'}>Learn More</Link>
      </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;