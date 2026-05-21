import DoctorCard from '@/components/home/DoctorCard';
import { fetchDoctors } from '@/lib/doctors/data';
import React from 'react';



const DoctorsPage = async() => {

    const doctors=await fetchDoctors();
    console.log(doctors);

    return (
        <div className='md:w-10/12 mx-auto my-10'>
            <h2 className='text-3xl font-semibold'>Find Your Specialist</h2>
            <p>Browse our network of certified healthcare professionals and book your next appointment in minutes.</p>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    doctors?.map((doctor)=>{

                        return <DoctorCard key={doctor._id} doctor={doctor}></DoctorCard>
                    })
                }
            </div>
        </div>
    );
};

export default DoctorsPage;