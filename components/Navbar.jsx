import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full  bg-slate-800/30 backdrop-blur-md transition-all duration-300 text-white flex justify-around h-16 items-center'>
        <div className="logo text-2xl font-extrabold">Get-Me-A-Cake</div>
        <ul className='flex justify-between gap-6'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li className='border px-2 rounded-2xl'>Find a Creator</li>
        </ul>

        <div>
          <Link href = {"/login"}>
        <button type="button" className="text-white  rounded-2xl bg-linear-to-br from-purple-600 to-blue-500 hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Login</button>
          </Link>
        </div>
    </nav>
  )
}

export default Navbar
