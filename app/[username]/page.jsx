import React from 'react'

export async function Username({ params }) {
  const { username } = await params;   // 👈 this is the important part

  return (
    <>
      <div className="cover w-full text-black">
        <img className='w-full h-[380]' src="https://i.pinimg.com/originals/d0/bf/c7/d0bfc76da6de38f91bcec23efe85082a.gif" alt="img loading" />

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



        <div className="payment flex p-4 gap-3 w-full">
          <div className="supporters w-1/2 bg-amber-200/20 rounded-lg p-8">
            <h2 className='text-lg font-bold my-3'>Supporters</h2>
            <ul className='mx-5'>
              <li className='flex gap-3 my-3 items-center'>
                <img width={37} src="avatar.gif" alt="" />
                <span>
                  akash donated <span className='font-bold'>50$</span> with a message ""
                </span>
              </li>
              <li className='flex gap-3 my-3 items-center'>
                <img width={37} src="avatar.gif" alt="" />
                <span>
                  akash donated <span className='font-bold'>50$</span> with a message ""
                </span>
              </li>
              <li className='flex gap-3 my-3 items-center'>
                <img width={37} src="avatar.gif" alt="" />
                <span>
                  akash donated <span className='font-bold'>50$</span> with a message ""
                </span>
              </li>
              <li className='flex gap-3 my-3 items-center'>
                <img width={37} src="avatar.gif" alt="" />
                <span>
                  akash donated <span className='font-bold'>50$</span> with a message ""
                </span>
              </li>
             
            </ul>
          </div>

          <div className="makepayment w-1/2 bg-blue-300/20 rounded-lg p-8">
            <h2 className='text-lg font-bold my-3'>Buy a cake for this creator</h2>
            <div className='flex flex-col gap-2'>
              {/* input for name and message optional */}
              <input type="text" placeholder='Enter your name' className='p-3 w-full rounded-lg bg-slate-300' />
              <input type="text" placeholder='Enter a message ' className='p-3 w-full rounded-lg bg-slate-300' />
              <input type="number" placeholder='Enter Amount in USD' className='p-3 w-full rounded-lg bg-slate-300' />
              <button className=' rounded-lg bg-blue-300 p-3 '>Pay</button>
            </div>
            {/* or choose an amount */}
            <div className='flex gap-3 mt-3'>
              <button className=' rounded-lg bg-blue-300 p-3 hover:cursor-cell '>05$</button>
              <button className=' rounded-lg bg-blue-300 p-3 hover:cursor-cell '>10$</button>
              <button className=' rounded-lg bg-blue-300 p-3 hover:cursor-cell '>20$</button>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Username
