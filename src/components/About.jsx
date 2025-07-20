import { motion } from 'framer-motion';

const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen bg-gray-900 text-gray-300 pt-32 px-4 sm:px-6 lg:px-8 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold inline border-b-4 border-cyan-400 text-white">
            About Me
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Intro Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg text-3xl font-semibold leading-snug"
          >
            <p>
              Hi, I'm Phil — it's great to meet you. Feel free to explore!
            </p>
          </motion.div>

          {/* Description Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg text-gray-400 text-lg leading-relaxed"
          >
            <p>
              I’m a <span className="text-cyan-300 font-medium">Software and QA Engineer</span> at Nexus AG one of Germany’s leading software companies. I help ensure our applications are reliable, efficient, and user-friendly.
            </p>
            <p className="mt-4">
              I’m passionate about writing clean, scalable code and delivering
              on time. My QA experience taught me to deeply care about quality, testing, and the user's experience.
            </p>
            <p className="mt-4">
              Outside of work, I volunteered as a DevOps Engineer at
              <span className="text-cyan-300 font-medium"> Münchener Tafel</span>, where I built a Salesforce component to track delivery vehicles contributing to a mission that helps feed people in need across Munich.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
