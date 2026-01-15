"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const nav = [
    { name: "Home", src: "#home" },
    { name: "Blogs", src: "#blogs" },
    { name: "Contacts", src: "#contacts" },
  ];
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-white shadow-input p-2 w-full sm:w-xl relative md:w-4xl rounded-md mx-auto flex items-center justify-between">
        <Image
          className="h-6 w-6 rounded-md"
          src={"/aceternity.png"}
          alt="https://ui.aceternity.com/logo.png"
          height={1000}
          width={1000}
        ></Image>

        <div onClick={() => setOpen(prev => !prev)} className="sm:hidden">
          {open ?  <svg width="16" height="16" fill="none">
                  <path
                    stroke="#0F0C0C"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="m4 4 8 8M12 4l-8 8"
                  ></path>
                </svg> : <svg width="16" height="16" fill="none">
            <path
              stroke="#0F0C0C"
              strokeLinecap="square"
              strokeWidth="2"
              d="M2 4h12M2 12h12"
            ></path>
          </svg>}
            </div>

          {open && (
            <div className=" md:hidden absolute rounded-lg  inset-x-0 top-12 m-auto bg-neutral-50 text-black shadow-input w-[98%] ">
             
               
         

              <div className="flex justify-center ">
               
              </div>

              <div className="flex flex-col  text-neutral-800">
                {nav.map((itm, idx) => (
                  <Link
                    className=" m-2 hover:text-neutral-500 cursor-pointer"
                    href={itm.src}
                    key={idx}
                  >
                    {itm.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

        <div className="text-neutral-600 text-sm hidden sm:block">
          {nav.map((itm, idx) => (
            <Link
              className=" m-5 hover:text-neutral-500"
              href={itm.src}
              key={idx}
            >
              {itm.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
