"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

const BookingCard = ({
  appointment,
  appointments,
  setAppointments,
}) => {
  const {
    _id,
    userName,
    doctorName,
    appointmentDate,
    appointmentTime,
    phone,
    gender,
    image,
    price,
    userEmail,
  } = appointment;

  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    userName,
    gender,
    phone,
    appointmentDate,
    appointmentTime,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // DELETE
  const handleDelete = async () => {
    const { data: tokenData } = await authClient.token();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/appointments/${_id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${tokenData?.token}`,
        },
      }
    );

    const data = await res.json();

    if (data.deletedCount > 0) {
      const remaining = appointments.filter(
        (item) => item._id !== _id
      );

      setAppointments(remaining);

      toast.success(
        "Appointment deleted successfully!"
      );
    }
  };

  // UPDATE
  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedData = {
    userName:form.userName,
      gender: form.gender,
      phone: form.phone,
      appointmentDate: form.appointmentDate,
      appointmentTime: form.appointmentTime,
    };

    const { data: tokenData } = await authClient.token();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/appointments/${_id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(updatedData),
      }
    );

    const data = await res.json();

    if (data.modifiedCount > 0) {

      // instantly update UI
      const updatedAppointments = appointments.map(
        (item) => {
          if (item._id === _id) {
            return {
              ...item,
              ...updatedData,
            };
          }

          return item;
        }
      );

      setAppointments(updatedAppointments);

      toast.success(
        "Appointment updated successfully!"
      );

      setOpen(false);
    }
  };

  return (
    <>
      {/* CARD */}
      <div className="border max-w-3xl rounded-2xl p-5 shadow-sm bg-white">

        <div className="flex flex-col md:flex-row gap-5">

          {/* IMAGE */}
          <img
            src={image}
            alt={doctorName}
            className="w-32 h-32 rounded-xl object-cover"
          />

          {/* INFO */}
          <div className="flex-1 space-y-1">

            <h2 className="text-2xl font-bold text-blue-600">
              {doctorName}
            </h2>

            <p>
              <strong>Patient Name:</strong> {userName}
            </p>

            <p>
              <strong>Email:</strong> {userEmail}
            </p>

            <p>
              <strong>Gender:</strong> {gender}
            </p>

            <p>
              <strong>Phone:</strong> {phone}
            </p>

            <p>
              <strong>Date:</strong> {appointmentDate}
            </p>

            <p>
              <strong>Time:</strong> {appointmentTime}
            </p>

            <p>
              <strong>Fee:</strong> ৳{price}
            </p>

            {/* BUTTONS */}
            <div className="flex gap-3 mt-4">

              <button
                onClick={() => setOpen(true)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                Update
              </button>

              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* UPDATE MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-2xl w-full max-w-md relative">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-4 text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4">
              Update Appointment
            </h2>

            <form
              onSubmit={handleUpdate}
              className="space-y-3"
            >

              {/* READ ONLY */}
              <input
                value={doctorName}
                readOnly
                className="w-full border p-2 rounded bg-gray-100"
              />

              <input
                value={userEmail}
                readOnly
                className="w-full border p-2 rounded bg-gray-100"
              />

              {/* EDITABLE */}
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              >
                <option>Male</option>
                <option>Female</option>
              </select>

            {/* patient name */}
                    <div>
            <label className="font-bold">
                Patient Name
            </label>

           <input
  name="userName"
  value={form.userName || ""}
  onChange={handleChange}
  className="w-full border p-2 rounded"
/>
            </div>
                
            <label className="font-bold" htmlFor="">Patient Contact Number</label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />

              <input
                type="date"
                name="appointmentDate"
                value={form.appointmentDate}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />

              <input
                type="time"
                name="appointmentTime"
                value={form.appointmentTime}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingCard;