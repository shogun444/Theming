import cn from "@/app/utils/utils"
import Image from "next/image"
import { relative } from "path"

export default function ImageHover() {
  return(
  

  <div className="p-4  grid grid-cols-2  bg-neutral-200 dark:bg-neutral-800">
<CardHeader className={"dark:text-neutral-200 text-neutral-800"}>
  Gradients
  <CardDescription>
    No need to remember that complicated gradient syntax — create silky-smooth gradients with just a few utility classes.
    <CardSkeleton >
      <CardHeader className={"text-2xl "}>Redefining real-time performance
      <CardDescription className={"text-[15px] font-medium "}>Our next-generation rendering engine delivers unmatched speed and efficiency, empowering creators to push boundaries like never before.</CardDescription>
    </CardHeader>
    </CardSkeleton>
  </CardDescription>
</CardHeader>

<CardHeader>
  3D transforms
  <CardDescription>
    Sometimes two dimensions aren’t enough. Scale, rotate, and translate any element in 3D space to add a touch of depth.
    <CardSkeleton className={"relative "}>
      <div 
      style={{
        backgroundImage : "radial-gradient(var(--color-neutral-400) 1px , transparent 1px)",
   backgroundRepeat : "repeat",
     backgroundSize : "10px 10px"
      }}
      className="w-full group/itm relative flex items-center justify-center   ">

      </div>
      <div 
      style={{
        backgroundImage : "radial-gradient(var(--pattern-fg) 1px , transparent 1px)",
   backgroundRepeat : "repeat",
     backgroundSize : "12px 12px"
      }}
      className="group absolute inset-0 p-2 dark:bg-neutral-700 bg-neutral-50 perspective-distant transform-3d  m-auto size-40 rounded-2xl border dark:border-neutral-600 border-neutral-300 group-hover/itm:bg-neutral-500">
<Image className="rounded-2xl h-full  w-full object-cover rotate-z-10   translate-z-20 rotate-x-32 rotate-y-15 group-hover:rotate-x-0  group-hover:rotate-y-0  group-hover:rotate-z-0 duration-200 transition" src={"/beach.jpg"} alt="/beach.jpg" height={1000} width={1000}></Image>
      </div>
    </CardSkeleton>
  </CardDescription>
</CardHeader>
  </div>)
}
export function CardHeader({children ,className} : {children : React.ReactNode , className? : String}){
  return(<div className={cn("text-md text-shadow-lg text-shadow-neutral-200 font-semibold dark:text-neutral-200 text-neutral-800 dark:bg-neutral-200",className)}>{children}</div>)
}

export function CardDescription({className,children} : {children :React.ReactNode,className? : String}){
  return(<div className={cn("text-sm text-shadow-none font-medium text-neutral-600 dark:text-neutral-300 pt-3",className)}>{children}</div>)
}
  
  export function CardSkeleton({className , children} : {className? : String,children : React.ReactNode}){
    return (<div 
      
      className={cn("h-80 w-[calc(100%-1rem)] text-shadow-none mt-5 rounded-2xl dark:bg-neutral-800 border border-neutral-800 p-2 flex justify-items-center",className)}>{children}</div>)
  }
  