"use client";

import React, { useEffect, useState } from "react";
import DoctorCard from "./DoctorCard";

const TopRatedDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const res = await fetch("http://localhost:8080/doctors");
        const data = await res.json();

        // Sort by rating (highest first)
        const sortedDoctors = data.sort(
          (a, b) => b.rating - a.rating
        );

        // Take only top 3
        const topDoctors = sortedDoctors.slice(0, 3);

        setDoctors(topDoctors);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <section className="py-16 px-4">
      <div className="md:w-10/12 mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">
            Top Rated Doctors
          </h2>

          <p className="text-gray-600 mt-3">
            Consult with our highest rated specialists.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <DoctorCard
              key={doctor._id}
              doctor={doctor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedDoctors;