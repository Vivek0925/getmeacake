import React from 'react'

export async function Username({ params }) {
  const { username } = await params;   // 👈 this is the important part

  return (
    <>
      <div className="cover w-full text-black">
        <img className='w-full h-[380]' src="https://i.pinimg.com/originals/d0/bf/c7/d0bfc76da6de38f91bcec23efe85082a.gif" alt="" />

        <div className=' absolute bottom-[40%] right-[46%] '>
          <img width={120} height={120} className='rounded-full' src="pfp.jpg" alt="" />
        </div>
        <div className="info flex justify-center items-center my-13 flex-col">

          <div className='font-bold'> 
          @{username}
          </div>

          <div className='text-slate-500'>
            Creating a podcast with ben avery, devan costa and jace avery
            </div>

            <div className='text-slate-500'>
            12,348 members . 459 posts . $43,690/month
          </div>
        </div>

      </div>
    </>
  );
}

export default Username
