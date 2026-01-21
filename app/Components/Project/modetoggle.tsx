"use client";
import { useTheme } from "next-themes";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();
  function handle() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }
  return (
    <>
      <nav className="flex w-full md:w-2xl mx-auto mb-4 gap-5 shadow-input rounded-md p-1 dark:shadow-dark">
        <button
          onClick={handle}
          className="cursor-pointer  dark:text-neutral-200 shadow-input dark:bg-neutral-700 p-1 rounded-lg bg-neutral-100 text-neutral-700"
        >
          {" "}
          {theme == "light" ?  (
            <div className="scale-100 dark:rotate-45  transition-all duration-300">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>{" "}
            </div>
          ) : (
            <div className="scale-0  dark:scale-100 rotate-15  transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            </div>
          ) }
        </button>
        <button onClick={handle} className="cursor-pointer"></button>
      </nav>

      {/* <div className="h-screen w-full flex justify-center items-center">
  
    <div className="bg-neutral-100 p-px h-10 w-10 rounded-md z-10 relative overflow-hidden">
      <div className=" relative z-10 bg-neutral-50 h-full w-full rounded-md"></div>
      <div className="absolute bg-conic-90 animate-spin scale-[1.2] from-blue-400 via-transparent to-transparent h-full w-full inset-0 rounded-md"></div>
      <div className="absolute bg-conic-90 animate-spin scale-[1.2] from-amber-400 via-transparent to-transparent h-full w-full inset-0 rounded-md [animation-delay:0.4s]"></div>
    </div>
      </div> */}
    </>
  );
}
