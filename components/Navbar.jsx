"use client"
import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
import { useState } from 'react'

const Navbar = () => {

  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false)



  return (
    <nav className='fixed top-0 left-0 w-full  bg-slate-800/30 backdrop-blur-md transition-all duration-300 text-white flex justify-around h-16 items-center'>
      <div className="logo text-2xl font-extrabold">Get-Me-A-Cake</div>
      <ul className='flex justify-between gap-6'>
        {/* <li>Home</li> */}
        {/* <li>About</li>
        <li>Contact</li> */}
        {/* <li className='border px-2 rounded-2xl'>Find a Creator</li> */}
      </ul>

      <div>
        {session && (
          <>
            <button onClick={showdropdown ? () => setShowdropdown(false) : () => setShowdropdown(true)}
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="inline-flex items-center rounded-2xl  bg-linear-to-br from-purple-600 justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 dark:bg-blue-600 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 mx-2 focus:outline-none"
              type="button"
            >
              Welcome {session.user.name}
              <svg
                className="w-4 h-4 ms-1.5 -me-0.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </button>

            <div
              id="dropdown"
              className={`z-10 ${showdropdown ? "" : "hidden"} text-black py-2 my-4 absolute rounded-2xl bg-blue-700/10 backdrop-blur-md bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44`}
            >
              <ul
                className="p-2 text-sm text-body font-medium"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a href='/dashboard' className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                    Earnings
                  </a>
                </li>
                <li>
                  <a onClick={()=>{signOut()}} className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </>
        )}



        {session &&
          <button onClick={() => { signOut() }} type="button" className="text-white mx-1 rounded-2xl bg-linear-to-br from-purple-600  hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 ">Logout</button>
        }

        {!session &&
          <Link href={"/login"}>
            <button type="button" className="text-white  rounded-2xl bg-linear-to-br from-purple-600  hover:bg-linear-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Login</button>
          </Link>}
      </div>
    </nav>
  )
}

export default Navbar
