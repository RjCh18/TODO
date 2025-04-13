import React from 'react'

const Navbar = () => {
  return (
   <nav className='flex justify-around py-2'>
    <div className="logo">
        <span className='font-bold text-white text-xl mx-8'>Logo</span>
    </div>
    <ul className="flex gap-10 mx-9 text-white">
        <li className='cursor-pointer hover:font-bold'>Home</li>
        <li className='cursor-pointer hover:font-bold'>Your Tasks</li>
    </ul>

   </nav>
  )
}

export default Navbar
