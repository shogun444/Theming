import cn from "@/app/utils/utils";
import Image from "next/image";

export default function NextLevelGrid() {
  return (
    <div className="min-h-screen w-full md:max-w-4xl">
      <div className="w-full md:max-w-2xl mx-auto">
        <Header />
      </div>
      <div className=" md:grid md:grid-cols-3  md:rounded-2xl bg-neutral-300 p-1   md:mask-b-from-70%">
        <Card text="Rolex" className="md:rounded-tl-2xl p-3 sm:p-px" src="/images/1.png" />
        <Card text="Lamborghini" className="p-3 sm:p-px" src="/images/2.png" />
        <Card text="Nike" className="md:rounded-tr-2xl p-3 sm:p-px" src="/images/3.png" />
        <Card text="Avian" className="p-3 sm:p-px" src="/images/4.png" />
        <Card text="Shure" className="p-3 sm:p-px" src="/images/5.png" />
        <Card text="SHure" className="p-3 sm:p-px" src="/images/6.png" />
        <Card text="Focusrite" className="p-3 sm:p-px" src="/images/7.png" />
        <Card text="Razer" className="p-3 sm:p-px" src="/images/8.png" />
        <Card text="Apple" className="p-3 sm:p-px" src="/images/9.png" />
        <Card text="Asus ROG" className="p-3 sm:p-px" src="/images/10.png" />
        <Card text="NVidia" className="p-3 sm:p-px" src="/images/11.png" />
        <Card text="Vercel" className="p-3 sm:p-px" src="/images/12.png" />
        <Card text="Fender" className="md:rounded-bl-2xl p-3 sm:p-px" src="/images/13.png" />
        <Card text="Omega" className="p-3 sm:p-px" src="/images/14.png" />
      </div>
    </div>
  );
}

function Header() {
  return (
    <>
      <h1 className="text-2xl font-semibold tracking-tight text-neutral-900 pt-10">
        Bento Grids are cool you should try them they are Awesome!
      </h1>
      <p className="text-base font-medium text-neutral-700 pt-5 tracking-tighter">
        Built in the quiet hours between doubt and discipline, this form doesn’t
        just collect data—it tests intent. Every field waits patiently, every
        border reacts honestly, and{" "}
        <span className="text-blue-600">every interaction tells </span> a story.
        Clean, sharp, and slightly aggressive, it rewards precision and exposes
        hesitation. No noise, no fluff—just structure, feedback,
        <span className="text-blue-600">and forward motion. </span>{" "}
      </p>{" "}
    </>
  );
}

function Card({
  src,
  text,
  href,
  className,
}: {
  src: string;
  text: string;
  href?: string;
  className?: string;
}) {
  return (
    <div className="relative cursor-pointer group " >
      <span className="h-full w-full absolute inset-0 group-hover:bg-black/70  z-10"></span>
      <h1 className="absolute  justify-center text-base font-semibold tracking-tight items-center inset-0 m-auto z-10 h-full w-full text-white group-hover:flex hidden">
        {text}
      </h1>
      <Image
        className={cn("relative ", className)}
        src={src}
        alt={src}
        height={1000}
        width={1000}
      ></Image>
    </div>
  );
}
