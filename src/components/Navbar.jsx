import { useState } from 'react'
import { FaBars, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
import Logo from '../assets/p.jpg'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#08192f] text-gray-300 z-50'>
      {/* Logo */}
      <div className='rounded-ee-full border-2 border-gray-300'>
        <img src={Logo} alt="Logo" style={{ width: '60px' }} />
      </div>

      {/* Desktop Menu */}
      <ul className='hidden md:flex space-x-6 text-lg font-semibold'>
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="about" smooth={true} duration={500}>About</Link></li>
        <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>

      {/* Hamburger Icon */}
      <div onClick={handleClick} className='md:hidden z-10 cursor-pointer'>
        {!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>

      {/* Mobile Menu */}
      <ul className={`absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center transition-all duration-300 ${!nav && 'hidden'}`}>
        {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
          <li key={section} className='py-6 text-2xl'>
            <Link
              onClick={handleClick}
              to={section}
              smooth={true}
              duration={500}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-sky-900'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/philemon-anaman-a3314a250/' target='_blank' rel="noopener noreferrer">
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333]'>
            <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/shakurphilemon' target='_blank' rel="noopener noreferrer">
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-900'>
            <a className='flex justify-between items-center w-full text-gray-300' href='mailto:your-email@example.com'>
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-500'>
            <a className='flex justify-between items-center w-full text-gray-300' href='/resume.pdf' download>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
