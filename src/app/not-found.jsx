"use client";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      
      <h1 className="text-6xl font-bold text-blue-500 mb-4">
        404
      </h1>

      <h2 className="text-2xl font-semibold mb-2">
        Page Not Found
      </h2>

      <p className="text-gray-500 mb-6">
        Oops! The page you are looking for doesn’t exist.
      </p>

      <Link href="/">
        <button className="btn btn-primary">
          Go Back Home
        </button>
      </Link>

    </div>
  );
};

export default NotFoundPage;