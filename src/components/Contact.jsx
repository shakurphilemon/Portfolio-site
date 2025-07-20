import { useState } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';


const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);

    try {
      await fetch('https://getform.io/f/46b192b3-8f67-4be3-b2c2-51b4a0f74ca2', {
        method: 'POST',
        body: formData,
      });
      setShowToast(true);
      e.target.reset();
      setTimeout(() => setShowToast(false), 4000);
    } catch (error) {
      alert('Something went wrong. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div
      name='contact'
      className='w-full min-h-screen bg-gradient-to-b from-slate-200 to-slate-300 flex flex-col justify-center items-center px-4 py-12 relative'
    >
      <form
        onSubmit={handleSubmit}
        className='bg-white rounded-lg shadow-xl p-8 w-full max-w-[600px]'
      >
        <div className='pb-6'>
          <h2 className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-800'>Contact</h2>
          <p className='text-gray-600 pt-4'>Send me a message, and I’ll get back to you as soon as possible.</p>
        </div>

        <input
          className='bg-gray-100 rounded-md p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-pink-500'
          type='text'
          placeholder='Your Name'
          name='name'
          required
        />
        <input
          className='bg-gray-100 rounded-md p-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-pink-500'
          type='email'
          placeholder='Your Email'
          name='email'
          required
        />
        <textarea
          className='bg-gray-100 rounded-md p-3 w-full h-40 resize-none focus:outline-none focus:ring-2 focus:ring-pink-500'
          name='message'
          placeholder='Your Message...'
          required
        ></textarea>

        <button
          type='submit'
          className='mt-6 bg-pink-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-pink-700 transition duration-300 w-full font-semibold flex justify-center items-center'
          disabled={loading}
        >
          {loading ? (
            <span className='animate-spin rounded-full h-5 w-5 border-t-2 border-white'></span>
          ) : (
            'Send Message'
          )}
        </button>

        {showToast && (
          <div className='mt-4 text-center text-green-600 font-medium transition-opacity duration-500'>
           Message sent successfully!
          </div>
        )}
      </form>

      {/* Social Links */}
      <div className='flex gap-6 mt-8 text-gray-800 text-2xl'>
        <a href='https://www.linkedin.com/in/philemon-anaman-a3314a250/' target='_blank' rel='noopener noreferrer'>
          <FaLinkedin className='hover:text-pink-600 transition duration-300' />
        </a>
        <a href='https://github.com/shakurphilemon' target='_blank' rel='noopener noreferrer'>
          <FaGithub className='hover:text-pink-600 transition duration-300' />
        </a>
        <a href='mailto:shakurphilemon@gmail.com'>
          <FaEnvelope className='hover:text-pink-600 transition duration-300' />
        </a>
      </div>
    </div>
  );
};

export default Contact;
