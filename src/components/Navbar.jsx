import React, {useState} from 'react'
import {FaBars, FaTimes, FaLinkedin, FaGithub} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Logo from '../assets/p.jpg'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#08192f] text-gray-300'>
      <div className='rounded-ee-full border-solid border-2 border-gray-300'>
       <img src={Logo} alt="Logo" style={{width: '100px'}} />
      </div>

       {/* Menu */}
      <div>
        <ul className='hidden md:flex'>
           <li><Link to="/">Home</Link></li>
           <li><Link to="/About">About</Link></li>
           <li><Link to="/Skills">Skill</Link></li>
           <li><Link to="/Work">Projects</Link></li>
           <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </div>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes/>}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gray-800 flex flex-col justify-center items-center'}>
        <li className='py-6 text-4x'><Link to="/" onClick={handleClick}>Home</Link></li>
        <li className='py-6 text-4x'><Link to="/About" onClick={handleClick}>About</Link></li>
        <li className='py-6 text-4x'><Link to="/Skills" onClick={handleClick}>Skill</Link></li>
        <li className='py-6 text-4x'><Link to="/Work" onClick={handleClick}>Projects</Link></li>
        <li className='py-6 text-4x'><Link to="/Contact" onClick={handleClick}>Contact</Link></li>
      </ul> 
    

      {/* Social Icons */ }
      <div className=' hidden lg:flex fixed flex-col top-[35%] left-0'>
      <ul>
        <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-sky-900'>
          <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/philemon-anaman-a3314a250/' target='_blank' rel="noopener noreferrer">
          Linkedin <FaLinkedin size={30} />
        </a></li>
        <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
          <a className=' flex justify-between items-center w-full text-gray-300' href='https://github.com/shakurphilemon' target='_blank' rel="noopener noreferrer">
          Github <FaGithub size={30} />
        </a></li>
        <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-900'>
          <a className=' flex justify-between items-center w-full text-gray-300' href='/'>
          Email <HiOutlineMail size={30} />
        </a></li>
        <li className=' w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-500'>
          <a className=' flex justify-between items-center w-full text-gray-300' href='/'>
          Resume <BsFillPersonLinesFill size={30} />
        </a></li>
      </ul>
      </div>
    


    </div>
  )
}

export default Navbar