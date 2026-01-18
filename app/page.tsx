import Image from "next/image";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import ModeToggle from "./Components/Project/modetoggle";
import Bento from "./Components/Project/bento";
import Gradient from "./Components/Project/gradeint-button";
import ImageHover from "./Components/Project/ImageHover";

export default function Home() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto dark:bg-neutral-900 bg-neutral-100 md:p-2 relative ">
      {/* <Hero/> */}
      {/* <Navbar/> */}
      {/* <Card /> */}
      <ModeToggle/>
      <Bento/>
      <Gradient/>
      <ImageHover/>
    </div>
  );
}
