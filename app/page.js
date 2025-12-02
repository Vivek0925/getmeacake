import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <div className=" hero w-full h-screen bg-cover bg-center flex items-center" style={{ backgroundImage: "url('/home2.jpg')" }}>

          <div className="text-white font-extrabold leading-[0.85] text-[8vw] w-full px-10">
            
            <div className="flex justify-start">
              <span>Your&nbsp;</span>
              <span>Wildest</span>
            </div>

            <div className="flex justify-end">
              <span>Creative&nbsp;</span>
              <span>Reality</span>
            </div>

          </div>


        </div>
      </div>

      <div className="main flex flex-col justify-center items-center p-40 gap-4 text-black ">

        <div className="flex gap-5 text-4xl font-extrabold">Buy Me A Cake <span><img src="cake1.gif" width="40" alt="" /></span> </div>  
        <p>A Crowd funding platform for your Creators. Get Funded by your Fans and Followers!</p> 


      <div className="flex justify-center items-center gap-6">
        <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Start Here</button>

        <button type="button" className="text-white bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Get Started</button>
      </div>

      </div>
      <div>

      <div className="line bg-blue-900 h-1 opacity-10"></div>
      <div>
        <h1 className="text-center font-bold p-7 text-2xl">Your fans can buy you a cake!</h1>
        <div className="flex gap-5 justify-around ">
          <div className="items">
            <Image src="/cake1.gif" width={100} height={100} alt="Cake" />
            <p className="font-bold">Fund Yourself</p>
          </div>
          <div className="items">
            <Image src="/cake1.gif" width={100} height={100} alt="Cake" />
            <p className="font-bold">Fund Yourself</p>
          </div>
          <div className="items">
            <Image src="/cake1.gif" width={100} height={100} alt="Cake" />
            <p className="font-bold">Fund Yourself</p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
