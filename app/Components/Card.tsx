"use client"
import Image from "next/image";
import { Pattern } from "../page";
import { useTheme } from 'next-themes'

export default function Card() {
  const logos = [
    { src: "/node.svg" },
    { src: "/aceternity.png" },
    { src: "/fints.svg" },
    { src: "/tailwind.svg" },
  ];
  const {theme,setTheme} = useTheme()
  function ThemeChange(){
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }
  return (
    <div className="relative shadow-input h-72 w-54 overflow-hidden rounded-xl dark:border dark:border-neutral-600 dark:bg-neutral-800  bg-neutral-50 ">
      <Pattern />
      <div className="flex gap-5 mask-x-from-80% animate-marquee pt-10 ">
        {logos.map((itm, i) => (
          <div key={i}>
            <Image
              className="rounded-full h-6 w-6 "
              height={1000}
              width={1000}
              alt={itm.src}
              src={itm.src}
            ></Image>
          </div>
        ))}
      </div>
      <div className="flex-col mt-10 h-full  bg-neutral-200 dark:bg-neutral-800   pl-2">
        {" "}
        <h1 className="font-semibold tracking-tight dark:text-neutral-200 text-neutral-700 text-sm">
          These are the best tools for creating your website.
        </h1>
        <p className="font-medium text-xs  dark:text-neutral-500  text-neutral-700 pt-2">
          I love using these websites because they are fun and easy to use. They
          incorporat many things which i like for eg : free components,free
          landing pages etc. You should use it guys!
        </p>
        <button
          onClick={() => ThemeChange()}
          className=" text-[8px] mt-2 cursor-pointer font-semibold p-1 dark:text-neutral-300 dark:bg-neutral-700  rounded-xl text-neutral-600 shadow-input"
        >
          Switch Me
        </button>
      </div>
    </div>
  );
}
