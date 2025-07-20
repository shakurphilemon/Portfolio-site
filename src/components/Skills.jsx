import { motion } from 'framer-motion';
import DOCKER from '../assets/docker-logo.png';
import Postman from '../assets/postman-logo.png';
import Javascript from '../assets/javascript.png';
import ReactJs from '../assets/react.png';
import JavaImg from '../assets/Java.png';
import Github from '../assets/github.png';
import Squish from '../assets/squish logo.png';
import SQL from '../assets/logoAzureSql.png';
import Tailwind from '../assets/tailwind.png';
import Node from '../assets/node.png';
import Azure from '../assets/Azure Devops.png';
import SpringBoot from '../assets/spring-boot-logo.png';

const tech = [
  { name: 'Docker', image: DOCKER },
  { name: 'Postman', image: Postman },
  { name: 'JavaScript', image: Javascript },
  { name: 'React', image: ReactJs },
  { name: 'Java', image: JavaImg },
  { name: 'GitHub', image: Github },
  { name: 'Squish', image: Squish },
  { name: 'Azure SQL', image: SQL },
  { name: 'Tailwind', image: Tailwind },
  { name: 'Node.js', image: Node },
  { name: 'Azure DevOps', image: Azure },
  { name: 'Spring Boot', image: SpringBoot },
];

const Skills = () => {
  return (
    <div
      name='skills'
      className='w-full min-h-screen bg-gray-900 text-gray-300 scroll-mt-24 pt-24 pb-32 px-4'
    >
      <div className='max-w-[1200px] mx-auto'>
        {/* Heading */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className='mb-12'
        >
          <h2 className='text-4xl font-bold inline border-b-4 border-cyan-500 font-sans'>
            Experience
          </h2>
          <p className='text-gray-400 mt-2'>
            Technologies I’ve worked with
          </p>
        </motion.header>

        {/* Skills Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
          {tech.map(({ name, image }, index) => (
            <motion.div
              key={name}
              className='bg-gray-800 rounded-xl shadow-lg hover:scale-105 hover:bg-gray-700 hover:shadow-cyan-500/30 transition duration-300 ease-in-out p-6 flex flex-col items-center'
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <img
                src={image}
                alt={`${name} logo`}
                className='w-16 h-16 object-contain mb-4'
              />
              <p className='text-lg font-medium text-center'>{name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
