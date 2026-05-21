"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const BookingModal = ({ doctor }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
//   console.log(user);
// console.log(doctor);
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    gender: "",
    phone: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const {_id,fee,image}=doctor

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      userId: user?.id,
      userImage: user?.image,
      userName: user?.name,
      userEmail: user?.email,
      doctorId: _id,
      doctorName: doctor.name,
      gender: form.gender,
      phone: form.phone,
      appointmentDate: form.date,
      appointmentTime: form.time,
      image,
      price:fee,
    };

    // console.log(bookingData);

    const { data: tokenData } = await authClient.token();
    // console.log("TOKEN STRING:", tokenData?.token);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/appointments`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(bookingData),
      }
    );

    await res.json();

    toast.success("Appointment booked successfully!");
    setOpen(false);

  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(true)}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
      >
        Book Appointment
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md rounded-2xl p-6 relative">

            {/* Close */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-4 text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4">
              Book Appointment
            </h2>

            <form onSubmit={handleSubmit}  className="space-y-3">

              {/* Prefilled fields */}
              <input
                value={user?.email || ""}
                readOnly
                className="w-full p-2 border bg-gray-100 rounded"
              />

              <input
                value={doctor.name}
                readOnly
                className="w-full p-2 border bg-gray-100 rounded"
              />

              <input
                value={user?.name || ""}
                readOnly
                className="w-full p-2 border bg-gray-100 rounded"
              />

              {/* Editable */}
              <select
                name="gender"
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>

              <input
                name="phone"
                onChange={handleChange}
                placeholder="Phone"
                className="w-full p-2 border rounded"
                required
              />

              <input
                type="date"
                name="date"
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />

              <input
                type="time"
                name="time"
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded"
              >
                Confirm Appointment
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingModal;