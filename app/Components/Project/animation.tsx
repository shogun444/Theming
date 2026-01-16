"use client"
import {motion} from "motion/react"
import { Notion,Ball,Supabase,Rainbow,GPT, Code, Phone, Task , Native, TopLine,  BottomLine, Middle} from "./bento-svg"


export default function Animations(){
  return(<div className="relative">
    <div className="absolute top-30 left-1">
        <TopLine/> <Middle/> <BottomLine/>
    </div>
 
<div className="absolute top-20 inset-x-10 flex-col text-xs">

<div className="flex gap-3 h-10"><Task/> <span>Meeting Summarizer</span></div>
<div className="flex gap-3 h-10"><Code/> <span>Code Reviewer</span></div>
<div className="flex gap-3 h-10"> <Phone/> <span>Customer Support</span></div>

</div>
   
    <div className="bg-neutral-50  flex items-center justify-center   overflow-hidden w-10 h-10 absolute z-10 p-px rounded-md inset-x-81  top-25 transition duration-300">
      
     <div className="h-full w-full flex justify-center items-center rounded-[5px] z-10 bg-neutral-50">
      <Native/>
     </div>
       <div className="absolute h-full w-full transition duration-700 bg-conic from-red-600 via-transparent to-transparent animate-spin scale-[1.4] [animation-delay:0.4s]"></div>
       <div className="absolute h-full w-full transition duration-300  bg-conic from-transparent via-transparent to-blue-500 animate-spin scale-[1.4] "></div>
      
         
    </div>

  
  <Notion/>
  <Ball/>
  <Supabase/>
  <Rainbow/>
  <GPT/>

  
  </div>)
}