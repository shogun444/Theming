import Image from "next/image";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";

export default function Home() {
  return (
    <div className="h-screen w-full dark:bg-neutral-900 bg-neutral-50 md:p-2 flex justify-center items-center relative ">
      {/* <Hero/> */}
      {/* <Navbar/> */}
      <Card />
    </div>
  );
}

export function Pattern() {
  return (
    <div className="dark:bg-[repeating-linear-gradient(315deg,var(--pattern-fg1)_0,var(--pattern-fg1)_2px,transparent_0,transparent_50%)]  absolute inset-x-0 w-full h-full bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_2px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed  pointer-events-none mask-l-from-0% mask-b-from-0%   mask-t-from-0%  mask-r-from-0%"></div>
  );
}
