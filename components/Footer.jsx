import React from 'react'

const Footer = () => {
  return (
   <footer>
    <div className='bg-gray-800 text-white flex justify-center h-16 items-center'>
        © 2025 Get-Me-A-Cake. {new Date().getFullYear()} All rights reserved.
    </div>
   </footer>
  )
}

export default Footer
