export default function Gradient(){
return(<div style={{
  backgroundImage : `radial-gradient(black 1px , transparent 1px)`,
  backgroundSize : "10px 10px",
  backgroundRepeat : "repeat"
}} className="h-screen w-full bg-neutral-600 flex space-x-7 justify-center items-center">


<div className=" p-px z-10 h-10 flex items-center justify-center relative overflow-hidden rounded-md w-30"> 
  
  <div className="h-full w-full bg-blue-50 flex items-center justify-center rounded-sm  z-10"> Click on Me</div>
  <div className="absolute m-auto duration-300 rounded-sm transition h-full w-full animate-spin scale-[10] inset-0 bg-conic-0 from-transparent  to-red-500 "></div>
 </div>


 <div className="h-15 w-15 relative bg-neutral-100  rounded-md overflow-hidden p-px">
  <div className="absolute h-[calc(100%-2px)] m-auto w-[calc(100%-2px)] inset-x-0  z-10 bg-neutral-700 rounded-lg">
  </div>
  <div className="absolute inset-0 h-full w-full m-auto animate-spin bg-linear-to-r from-25% from-neutral-900 via-transparent to-transparent scale-[1.76] "></div>
 </div>
</div>)
}