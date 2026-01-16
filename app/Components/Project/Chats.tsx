import Image from "next/image";
import { Native, Send } from "./svgs";

export default function Chats() {
  return (
    <>
<div className="overflow-y-auto h-45 mask-y-from-70% px-2">
     <Card>Hello, how are you?</Card>
     <AICard>I'm good, thank you! How can I help you today?</AICard>
</div>
  
      <div className="mx-auto relative m-4 flex justify-center bg  w-full rounded-md items-center ">
        <input className="h-10 w-[calc(100%-4rem)] rounded-md pl-5 shadow-input" type="text" placeholder="Ask Nouts AI" />
        <div className="flex absolute inset-x-0 translate-x-80 gap-5 cursor-pointer">
          <Send />
        </div>
      </div>
    </>
  );
}

function Card({className,children} : {className? :string , children : React.ReactNode}){
  return(<div className="flex justify-end m-2 space-x-2 ">
  <Image className="rounded-full h-10 w-10" src={'/main.jpg'} alt="1" height={1000} width={1000}></Image>
 <div className=" bg-blue-600 font-medium text-neutral-200 rounded-lg rounded-b-sm w-fit p-3">
    {children}
     </div>
  </div>)
}


function AICard({className,children} : {className? :string , children : React.ReactNode}){
  return(<div className="flex items-start space-x-2 ">
  <div className="rounded-full h-10 w-10 flex items-center justify-center text-neutral-800 p-2 shadow-input">
    <Native/>
  </div>
  <div className="bg-neutral-300 font-medium text-neutral-600 rounded-lg p-3">
    {children}
     </div>
  
  </div>)
}