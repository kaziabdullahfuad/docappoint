import BookingModal from "@/components/BookingModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import React from "react";

const fetchSingleDoctor=async(id,token)=>{

    const res=await fetch(`${process.env.NEXT_PUBLIC_API_URL}/doctors/${id}`,{
      headers:{
        "authorization": `Bearer ${token}` || ""
      }
    })
    const data=res.json();
    return data || {};
}

const DoctorDetails = async ({ params }) => {
  const { id } = await params;
   const {token} = await auth.api.getToken({
      headers: await headers(), // headers containing the user's session token
    });
  
    // console.log(token);
//   const res = await fetch(`http://localhost:8080/doctors/${id}`);

//   const doctor = await res.json();

    const doctor=await fetchSingleDoctor(id,token);
    console.log(doctor);

  return (
    <div className="md:w-10/12 mx-auto p-6">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden grid md:grid-cols-2 gap-6">

        {/* Image */}
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-full object-cover"
        />

        {/* Info */}
        <div className="p-6 space-y-4">
          <h1 className="text-3xl font-bold">{doctor.name}</h1>
          <p className="text-blue-600 font-medium">{doctor.specialty}</p>

          <p className="text-gray-600">{doctor.description}</p>

          <div className="text-gray-700 space-y-2">
            <p><strong>Experience:</strong> {doctor.experience}</p>
            <p><strong>Hospital:</strong> {doctor.hospital}</p>
            <p><strong>Location:</strong> {doctor.location}</p>
            <p><strong>Fee:</strong> ৳ {doctor.fee}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <span className="text-yellow-500 font-bold">
              ⭐ {doctor.rating}
            </span>
            <span className="text-gray-500">
              ({doctor.reviews} reviews)
            </span>
          </div>

          {/* Availability */}
          <div>
            <h3 className="font-semibold mb-1">Availability</h3>
            <ul className="list-disc ml-5 text-gray-600">
              {doctor.availability.map((slot, index) => (
                <li key={index}>{slot}</li>
              ))}
            </ul>
          </div>

          {/* Button */}
          {/* <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition">
            Book Appointment
          </button> */}
          <BookingModal doctor={doctor} ></BookingModal>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;