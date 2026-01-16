"use client"
import {motion} from "motion/react"
import { Notion,Ball,Supabase,Rainbow,GPT, Code, Phone, Task , Native, TopLine,  BottomLine, Middle} from "./bento-svg"


export default function Animations(){
  return(<div className="relative">
    <div className="absolute top-30 left-1">
        <TopLine/><Middle/> <BottomLine/>
    </div>
 
<div className="absolute top-20 inset-x-10 flex-col text-xs">

<div className="flex gap-3 h-10"><Task/> <span>Meeting Summarizer</span></div>
<div className="flex gap-3 h-10"><Code/> <span>Code Reviewer</span></div>
<div className="flex gap-3 h-10"> <Phone/> <span>Customer Support</span></div>

</div>
   
    <div className="bg-neutral-900  w-fit p-2 rounded-md absolute inset-x-80  top-25 ">
      
        <Native/>
    </div>
 
  
  <Notion/>
  <Ball/>
  <Supabase/>
  <Rainbow/>
  <GPT/>

  
  </div>)
}