import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gray-800 text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className=' max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 font-sans'>About</p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 pl-4'>
            <div className=' sm:text-right text-4xl font-bold'>
              <p>Hi, I'm Phil, nice to meet you please feel free to look around.</p>
            </div>
            <div>
              <p> I'm Software and QA engineer working at Nexus Ag, one of the leading software companies in Germany. I'm currently working as QA engineer which means my sole
                  responsibility is to make sure that the software that the company is developing is of high quality and meets the standard of the company and customers usability.
                  I'm also a team player who is dedicated in delivering high-quality software on time and within 
                  budget and longing to apply any proven skill when it comes to software.
                  I dedicated one year of my time to work as a volunteer DevOps engineer at Munechner-Tafel a company also in Germany, that was established
                  to help people in the city of Munich that couldn't afford to buy food get food daily, and I will say throughout my stay in the company
                  I had a lot of excellent projects in which I help the company to develop a component in salesforce that was used to track vehicles in the company.
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About