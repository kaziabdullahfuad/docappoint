import { Card } from '@heroui/react';
import React from 'react';
import { FaHeart, FaRegEye, FaTeeth } from 'react-icons/fa6';

const Specialities = () => {
    return (
        <div className='md:w-10/12 mx-auto my-5'>
            <div className='text-center mb-5'>
                 <h2 className='text-4xl mb-3'>Our Specialities</h2>
                 <p className=''>Access a wide range of expert medical services tailored to your specific healthcare needs.</p>
                 
            </div>

            <div className='grid md:grid-cols-3 gap-3'>

                      <Card className='p-6 bg-white/80 backdrop-blur-sm border border-slate-200 text-center rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1'>
        <FaTeeth className='mx-auto text-4xl text-blue-600 mb-4' />
        <h3 className='text-xl font-semibold mb-2'>Dentistry</h3>
        <p className='text-slate-600 text-sm'>
            Expert dental care for healthy teeth and confident smiles.
        </p>
    </Card> 

    <Card className='p-6 bg-white/80 backdrop-blur-sm border border-slate-200 text-center rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1'>
        <FaHeart className='mx-auto text-4xl text-red-500 mb-4' />
        <h3 className='text-xl font-semibold mb-2'>Cardiology</h3>
        <p className='text-slate-600 text-sm'>
            Advanced heart care with trusted medical specialists.
        </p>
    </Card> 

    <Card className='p-6 bg-white/80 backdrop-blur-sm border border-slate-200 text-center rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1'>
        <FaRegEye className='mx-auto text-4xl text-blue-500 mb-4' />
        <h3 className='text-xl font-semibold mb-2'>Ophthalmology</h3>
        <p className='text-slate-600 text-sm'>
            Comprehensive eye care for clearer and healthier vision.
        </p>
    </Card> 
                   
                   
                 </div>
           
        </div>
    );
};

export default Specialities;