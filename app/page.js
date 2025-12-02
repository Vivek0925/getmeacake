import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <div className=" hero w-full h-screen bg-cover bg-center flex items-center" style={{ backgroundImage: "url('/home.jpg')" }}>

          <div className="text-white font-extrabold leading-[0.85] text-[8vw] w-full px-10">
            
            <div className="flex justify-start">
              <span>Your&nbsp;</span>
              <span>Wildest</span>
            </div>

            <div className="flex justify-end">
              <span>Creativity&nbsp;</span>
              <span>Reality</span>
            </div>

          </div>


        </div>
      </div>

      <div className="main flex flex-col justify-center items-center gap-6">

        <div className=" text-4xl font-extrabold">Buy Me A Cake</div>  
        <p>A Crowd funding platform for your Creators</p> 


      <div className="flex justify-center items-center gap-6">
        <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Start Here</button>

        <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Get Started</button>
      </div>

      </div>
    </>
  );
}
