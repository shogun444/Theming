export default function Hero() {
  return (
    <div className="bg-neutral-900  flex-col   justify-items-center">
      <h1 className="pt-20 font-display text-6xl font-bold  max-w-xl text-center bg-clip-text text-transparent bg-linear-to-b from-neutral-50  to-neutral-400 tracking-tight">
        Unleash the power of intuitive finance
      </h1>
      <p className="max-w-lg font-paaji font-medium tracking-tight selection:bg-white text-center  pt-5 text-md text-neutral-400">
        Say goodbye to the outdated{" "}
        <span className="text-primary">financial tools.</span> Every small
        business owner, regardless of the background, can now manage their
        business like a pro. Simple. Intuitive. And{" "}
        <span className="text-primary">never boring.</span>
      </p>

      <div className="flex max-w-2xl items-center">
        <input
          className="border focus:ring-1 focus:ring-primary outline-none  text-center text-sm border-primary bg-neutral text-neutral-400 rounded-md h-7 " 
          type="text"
          placeholder="Enter Email" 
          />

        <div className="flex relative cursor-pointer overflow-hidden bg-neutral-900 px-2 m-5 py-1 border border-neutral-800 text-sm text-neutral-400 rounded-md">
          <span className="absolute h-px w-2/3 m-auto bg-linear-to-r from-transparent via-cyan-400 to-transparent inset-x-0 bottom-0"></span>
          <span className="absolute blur-sm h-px w-full m-auto bg-linear-to-r from-transparent via-cyan-400 to-transparent inset-x-0 bottom-0"></span>
          Join the waitlist
        </div>
      </div>
    </div>
  );
}
