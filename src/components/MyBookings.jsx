"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useEffect, useState } from "react";
import BookingCard from "./BookingCard";

const MyBookings = () => {
  const { data: session } = authClient.useSession();

  const user = session?.user;

  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      // console.log("USER:", user);

      if (!user?.id) return;

      const { data: tokenData } = await authClient.token();

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/appointments/${user.id}`,
        {
          headers: {
            authorization: `Bearer ${tokenData?.token}`,
          },
        }
      );

      const data = await res.json();

      console.log("APPOINTMENTS:", data);

      setAppointments(data);
    };

    fetchAppointments();
  }, [user]);

  return (
    <div>
      <h1 className="text-3xl mb-3 text-blue-500 font-semibold">My Bookings</h1>

      {appointments.length === 0 ? (
        <h1 className="text-3xl ">You havent made any Bookings</h1>
        
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
  {appointments.map((appointment) => (
    <BookingCard
      key={appointment._id}
      appointment={appointment}
      appointments={appointments}
      setAppointments={setAppointments}
    />
  ))}
</div>
      )}
    </div>
  );
};

export default MyBookings;