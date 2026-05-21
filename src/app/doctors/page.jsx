"use client";

import DoctorCard from "@/components/home/DoctorCard";
import { fetchDoctors } from "@/lib/doctors/data";
import React, { useEffect, useState } from "react";



const DoctorsPage = () => {

  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const loadDoctors = async () => {

      setLoading(true);

      const data = await fetchDoctors();

      setDoctors(data);

      setLoading(false);
    };

    loadDoctors();

  }, []);

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="md:w-10/12 mx-auto my-10">

      <h2 className="text-3xl font-semibold">
        Find Your Specialist
      </h2>

      <p className="mb-5">
        Browse our network of certified healthcare professionals and
        book your next appointment in minutes.
      </p>

      {/* Search */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search doctor by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Loader */}
      {
        loading ? (

          <div className="flex justify-center items-center py-20">
            <span className="loading loading-spinner loading-lg text-blue-600"></span>
          </div>

        ) : (

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">

            {
              filteredDoctors.map((doctor) => (
                <DoctorCard
                  key={doctor._id}
                  doctor={doctor}
                />
              ))
            }

          </div>

        )
      }

    </div>
  );
};

export default DoctorsPage;