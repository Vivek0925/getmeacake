import React from 'react'

const Navbar = () => {
  return (
      <nav className='bg-gray-800 text-white flex justify-around h-16 items-center'>
        <div className="logo font-bold ">Get-Me-A-Cake</div>
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
