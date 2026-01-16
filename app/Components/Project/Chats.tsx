import Image from "next/image";
import { Native, Send } from "./svgs";

export default function Chats() {
  return (
    <>
<div className="overflow-y-auto h-25 mask-y-from-70%">
     <Card>Hello, how are you?</Card>
     <AICard>I'm good, thank you! How can I help you today?</AICard>
</div>
  
      <div className="m-4 flex justify-between px-10 w-90 rounded-md shadow-input mx-auto items-center h-10">
        <input type="text" placeholder="Ask Nouts AI" />
        <div className="flex">
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