"use client";

import MyBookings from "@/components/MyBookings";
import MyProfile from "@/components/MyProfilePage";
import { useState } from "react";


const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("bookings");

  return (
    <div className="md:w-10/12 mx-auto p-6">

      <h1 className="text-2xl font-bold mb-4">
        Dashboard
      </h1>

      {/* Tabs */}
      <div className="flex gap-4 border-b pb-2 mb-6">
        <button
          onClick={() => setActiveTab("bookings")}
          className={`px-4 py-2 ${
            activeTab === "bookings"
              ? "border-b-2 border-blue-600 font-semibold"
              : "text-gray-500"
          }`}
        >
          My Bookings
        </button>

        <button
          onClick={() => setActiveTab("profile")}
          className={`px-4 py-2 ${
            activeTab === "profile"
              ? "border-b-2 border-blue-600 font-semibold"
              : "text-gray-500"
          }`}
        >
          My Profile
        </button>
      </div>

      {/* Content */}
      <div>
        {activeTab === "bookings" && <MyBookings />}
        {activeTab === "profile" && <MyProfile />}
      </div>

    </div>
  );
};

export default DashboardPage;