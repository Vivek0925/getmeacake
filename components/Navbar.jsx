import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent text-white flex justify-around h-16 items-center'>
        <div className="logo text-2xl font-extrabold">Get-Me-A-Cake</div>
        <ul className='flex justify-between gap-6'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Login</li>
        </ul>
    </nav>
  )
}

export default Navbar
