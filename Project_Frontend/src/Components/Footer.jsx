import React from 'react'

const Footer = () => {
  return (
   
    <div className="  w-full px-30 bg-gray-900">
    <footer className="py-4 ">
      <ul className="flex justify-center border-b  ">
        <li className="nav-item"><a href="#" className="nav-link px-2 text-gray-500">Home</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-gray-500">Features</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-gray-500">Pricing</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-gray-500">FAQs</a></li>
        <li className="nav-item"><a href="#" className="nav-link px-2 text-gray-500">About</a></li>
      </ul>
      <p className="text-center text-gray-500">© 2025 Team Anveshak</p>
    </footer>
  </div>
  
  )
}

export default Footer;
