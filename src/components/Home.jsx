import React from 'react';
import Profile from '../assets/phil.jpg';
import { Link } from 'react-router-dom'; // Add this import

const Home = () => {
  return (
    <div className='w-full h-screen bg-slate-600 flex items-center justify-center'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
        {/* Text Content */}
        <div className='flex flex-col md:flex-row items-center md:items-center text-center md:text-left md:space-x-14'>
          <img
            className='w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-cyan-300'
            src={Profile}
            alt='Profile'
          />
          <div>
            <p className='text-cyan-200 text-xl md:text-2xl mb-2'>Hi, My name is</p>
            <h1 className='text-5xl sm:text-6xl font-bold text-[#ccd6f6] font-sans mb-2 whitespace-nowrap'>
              Philemon Anaman
            </h1>
            <h2 className='text-3xl sm:text-4xl font-bold text-[#8892b0] font-sans mb-6'>
              I'm a Software and QA Engineer
            </h2>
            <div className='mt-8 flex justify-center md:justify-start'>
              <Link to="/work">
                <button className='text-white group border-2 px-9 py-4 flex items-center hover:bg-zinc-400 hover:border-zinc-400 text-lg md:text-xl'>
                  Check Out My Works
                  <span className='group-hover:rotate-90 duration-300'>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

