import Banner from "@/components/home/Banner";
import Specialities from "@/components/home/Specialities";
import Testimonials from "@/components/home/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
     <Banner></Banner>
     <Specialities></Specialities>
     <Testimonials></Testimonials>
    </div>
  );
}
