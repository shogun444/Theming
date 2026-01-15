import Image from "next/image";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
   <div  className="h-screen w-full bg-neutral-50 md:p-2">
    {/* <Hero/> */}
    <Navbar/>
   </div>
  );
}
