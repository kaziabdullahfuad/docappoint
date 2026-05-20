import React from "react";
import { Star, MapPin, BriefcaseMedical } from "lucide-react";
import Link from "next/link";


const DoctorCard = ({ doctor }) => {
  const {
    _id,
    name,
    specialty,
    rating,
    reviews,
    image,
    experience,
    hospital,
    location,
    fee,
  } = doctor;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100">
      
      {/* Doctor Image */}
      <div className="h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full  object-cover hover:scale-105 transition duration-300"
        />
        {/* <Image
    src={image}
    alt={name}
    fill
    className="object-cover hover:scale-105 transition duration-300"
  /> */}
      </div>

      {/* Card Content */}
      <div className="p-5 space-y-4">

        {/* Name + Specialty */}
        <div>
          <h2 className="text-xl font-bold text-gray-800">{name}</h2>
          <p className="text-blue-600 font-medium">{specialty}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={18} fill="currentColor" />
            <span className="font-semibold text-gray-800">{rating}</span>
          </div>

          <span>({reviews} reviews)</span>
        </div>

        {/* Experience */}
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <BriefcaseMedical size={18} className="text-blue-500" />
          <span>{experience} Experience</span>
        </div>

        {/* Hospital + Location */}
        <div className="space-y-1 text-sm text-gray-600">
          <p className="font-medium">{hospital}</p>

          <div className="flex items-center gap-1">
            <MapPin size={16} className="text-red-500" />
            <span>{location}</span>
          </div>
        </div>

        {/* Fee */}
        <div className="flex justify-between items-center pt-2">
          <p className="text-lg font-bold text-blue-600">
            ৳ {fee}
          </p>

          <Link href={`/doctors/${_id}`}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition duration-300 font-medium cursor-pointer">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;