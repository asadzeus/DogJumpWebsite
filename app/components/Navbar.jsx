"use client"
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useState } from 'react';
import { usePathname } from 'next/navigation'

const Navbar = () => {

  const [hambMenu, setHambMenu] = useState(false);
  const route = usePathname();

  //bg-linear-to-b from-orange-500 to-red-500 border-b-1 

  return (
    <div className={`navbar flex justify-center w-screen items-center h-[100px] absolute top-0 z-99 ${route === "/Contact" ? `bg-red-500` : ""}`}>
      
      <div className='left flex justify-center items-center flex-1 text-xl ml-10 sm:text-2xl'>
        <a href="/" className="text-white text-4xl font-bold">Dog Jump</a>
      </div>
      
      <div className='right flex justify-center items-center flex-1 gap-6 text-white'>
        <div className="navnlinks flex justify-center items-center gap-3 hidden md:flex">

          <a href="/" className={`px-4 py-2 hover:bg-black rounded-xl ${route === "/" ? `bg-black` : ""}`}>Home</a>
          <a href="/Gallery" className={`px-4 py-2 hover:bg-black rounded-xl ${route === "/Gallery" ? `bg-black` : ""}`}>Gallery</a>
          <a href="/Media" className={`px-4 py-2 hover:bg-black rounded-xl ${route === "/Media" ? `bg-black` : ""}`}>Media</a>
          <a href="/Contact" className={`px-4 py-2 hover:bg-black rounded-xl ${route === "/Contact" ? `bg-black` : ""}`}>Contact</a>
        </div>
        <div className={`hamburger ${hambMenu ? "hidden" : "flex"} justify-end w-full mr-20 items-end cursor-pointer text-white sm:mr-25 md:hidden`} onClick={()=>{setHambMenu(true)}}><MenuRoundedIcon/></div>

        <div className={`hamburgermenu text-white text-xl gap-5 absolute right-0 left-0 h-screen top-0 p-5 flex flex-col justify-center items-center gap-2 bg-[#292929] ${hambMenu ? "flex" : "hidden"}`}>
          <div className="closehamburger" onClick={() => {setHambMenu(false)}}><CloseRoundedIcon/></div>
          <a href='/' className='text-2xl mb-10'>Dog Jump</a>
          <a href="/" >Home</a>
          <a href="/Gallery">Gallery</a>
          <a href="/Media">Media</a>
        </div>
      </div>

    </div>
  );
};

export default Navbar;

