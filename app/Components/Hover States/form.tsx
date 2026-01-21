import cn from "@/app/utils/utils";

export default function Form() {
  return (
    <>
      <div className="w-full min-h-screen text-center selection:bg-black selection:text-white">
        <span className="text-2xl font-semibold bg-clip-text bg-linear-to-b from-neutral-800 to-neutral-700 text-transparent">
          This is a{" "}
          <span className="text-white z-10 after:-z-12 after:-skew-3 after:bg-red-500 after:absolute after:inset-0 relative">
            Crazy
          </span>{" "}
          Form.
        </span>


        <div className="  gap-3 my-5">
         
            <LabelComponent  props={"First Name"}> 
            <FormComponent type="string" placeholder="First Name"></FormComponent>
          </LabelComponent> 
        
         
            <LabelComponent  props={"Last Name"}> 
            <FormComponent type="string" className="invalid:bg-red-500" placeholder="Last Name"></FormComponent>
          </LabelComponent>
            <LabelComponent props={"E-Mail"}> 
            <FormComponent type="email" placeholder="E-Mail"></FormComponent>
          </LabelComponent>
            <LabelComponent props={"Company Name"}> 
            <FormComponent type="string" placeholder="Company Name"></FormComponent>
          </LabelComponent>
        </div>

        <button className=" py-2 w-1/2 rounded-lg mx-auto bg-black active:scale-98 text-neutral-50 transition-all duration-150 cursor-pointer relative after:w-20 after:bg-white/70 hover:after:translate-x-90  after:h-full after:blur-2xl after:inset-0 after:absolute  hover:bg-neutral-900 hover:-translate-y-1 after:transition-all after:duration-200
        "> Send </button>
      </div>
    </>
  );
}


function LabelComponent({className,props,children } : { children : React.ReactNode,props : string , className? : string}){
  return(<label htmlFor={props} className={cn("before:content-['*'] before:text-red-400 ",className)} >
  {props} {children}
  </label>)
}

function FormComponent({className,placeholder,type} : {type : string, className? : string,placeholder  : string}){
  return(<input type={type}  className={cn("flex w-1/2 shadow-input px-4 py-2 border border-neutral-50 bg-neutral-50 focus:outline-none m-auto focus:ring-2 transition-all  duration-200 placeholder:text-gray-300 focus:ring-neutral-300 focus:ring-offset-2 rounded-lg text-black invalid:shadow-none  invalid:border-red-600",className)} placeholder={placeholder}/>)
}
