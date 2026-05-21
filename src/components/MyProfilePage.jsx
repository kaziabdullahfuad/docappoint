"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import Image from "next/image";
import { Avatar } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { UpdateUserModal } from "./UpdateUserModal";

const MyProfilePage = () => {
  // const userData = authClient.useSession();
  // const user = userData.data?.user;

  // const router=useRouter();

  // if (userData.isLoading) {
  //   return <p className="text-center mt-10">Loading...</p>;
  // }

  // if (!user) {
  //   // return <p className="text-center mt-10">Loading...</p>;
  //   router.push('/login');
  // }

  // ekdom notun agula
  const { data: session, isLoading } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();

  // Client-side protection
  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/login");   // use replace instead of push
    }
  }, [isLoading, user, router]);

  // Show loading while checking session
  if (isLoading) {
    return <p className="text-center mt-10">Loading profile...</p>;
  }

  // If no user after loading → show fallback (safety)
  if (!user) {
    return <p className="text-center mt-10">Redirecting to login...</p>;
  }

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="bg-white shadow-md rounded-2xl p-6 w-87.5 text-center">

        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          {/* <Image
            src={user.image || "/default-avatar.png"}
            alt="profile"
            width={100}
            height={100}
            className="rounded-full object-cover"
            unoptimized
          /> */}

           <Avatar className="w-24 h-24 text-2xl border-2 border-[#2563EB]">
                  <Avatar.Image  alt="John Doe" src={user?.image} referrerPolicy='no-referrer' />
                  <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
            </Avatar>
        </div>

        {/* Name */}
        <h2 className="text-xl font-semibold">{user?.name}</h2>

        {/* Email */}
        <p className="text-gray-500 my-2">{user?.email}</p>

        {/* Update Button
        <Link href="/profile/edit">
          <button className="btn bg-[#FF9F1C] text-white rounded-full mt-4 w-full">
            Update Profile
          </button>
        </Link> */}
        
          <UpdateUserModal></UpdateUserModal>

      </div>
    </div>
  );
};

export default MyProfilePage;