import Image from "next/image";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import ModeToggle from "./Components/Project/modetoggle";

export default function Home() {
  return (
    <div className="h-screen w-full dark:bg-neutral-900 bg-neutral-50 md:p-2 relative ">
      {/* <Hero/> */}
      {/* <Navbar/> */}
      {/* <Card /> */}
      <ModeToggle/>
    </div>
  );
}
