import { motion } from 'framer-motion';
import Profile from '../assets/phil.jpg';
import { Link } from 'react-scroll';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-slate-600 flex items-center justify-center"
    >
      <motion.div
        className="max-w-[1100px] w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-[auto_1fr] items-center gap-y-6 md:gap-x-6 justify-items-center md:justify-items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        variants={fadeInUp}
      >
        {/* Profile Image */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex justify-center"
        >
          <img
            className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover shadow-2xl border-4 border-cyan-300"
            src={Profile}
            alt="Profile"
          />
        </motion.div>

        {/* Text Block */}
        <motion.div
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center md:text-left"
        >
          <div className="flex flex-col space-y-1 leading-tight">
            <p className="text-cyan-200 text-lg md:text-xl">Hi, My name is</p>
            <h1 className="text-[clamp(1.8rem,5vw,3.75rem)] font-bold text-[#ccd6f6] font-sans whitespace-nowrap leading-tight">
              Philemon Anaman
            </h1>
            <h2 className="text-xl sm:text-3xl font-bold text-[#8892b0] font-sans">
              I'm a Software and QA Engineer
            </h2>
          </div>

          <div className="mt-8 flex justify-center md:justify-start">
            <Link to="projects" smooth={true} duration={500}>
              <button className="text-white group border-2 px-9 py-4 flex items-center hover:bg-zinc-400 hover:border-zinc-400 text-lg md:text-xl">
                Check Out My Works
              </button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
