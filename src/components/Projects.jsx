import { motion } from 'framer-motion';
import workingImg from '../assets/Project2.png';
import projectWork from '../assets/Project.png';
import portfolioImage from '../assets/PortoflioImg.png';
import springBootProject from '../assets/springProject.png';
import AWS from '../assets/AWSPROJECT.png';
import MongoDBProject from '../assets/MongoDB.png';

const projects = [
  {
    title: 'Salesforce Component',
    image: workingImg,
    description: 'Custom Salesforce UI component built using LWC.',
    tech: ['Salesforce', 'LWC'],
    demoLink: '/',
    codeLink: 'https://github.com/shakurphilemon/Cars-Tracker-Component-App',
  },
  {
    title: 'Portfolio Website',
    image: portfolioImage,
    description: 'Responsive portfolio built using React and TailwindCSS.',
    tech: ['React', 'Tailwind'],
    demoLink: '/',
    codeLink: '/',
  },
  {
    title: 'Project Tracker',
    image: projectWork,
    description: 'A web app to manage and track projects efficiently.',
    tech: ['React', 'Firebase'],
    demoLink: '/',
    codeLink: '/',
  },
  {
    title: 'Spring Boot App',
    image: springBootProject,
    description: 'RESTful backend API built with Spring Boot and Java.',
    tech: ['Spring Boot', 'Java'],
    demoLink: '/',
    codeLink: '/',
  },
  {
    title: 'AWS CI/CD Deployment',
    image: AWS,
    description: 'Infrastructure as Code setup with AWS and GitHub Actions.',
    tech: ['AWS', 'GitHub Actions'],
    demoLink: '/',
    codeLink: '/',
  },
  {
    title: 'MongoDB Dashboard',
    image: MongoDBProject,
    description: 'Dashboard built to visualize MongoDB data with charts.',
    tech: ['MongoDB', 'Express', 'React'],
    demoLink: '/',
    codeLink: '/',
  },
];

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300 scroll-mt-24 pt-24 pb-20 px-4"
    >
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold border-b-4 inline-block border-pink-600 mb-2">
            Projects
          </h2>
          <p className="text-gray-400 mt-2">Check out some of my recent work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-[1.02] transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[200px] object-cover object-top"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-3 tracking-wide">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-cyan-700 text-sm px-2 py-1 rounded-md text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.demoLink ? (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md text-sm"
                    >
                      Demo
                    </a>
                  ) : (
                    <span className="bg-gray-600 text-white px-4 py-2 rounded-md text-sm opacity-50 cursor-not-allowed">
                      Demo
                    </span>
                  )}
                  {project.codeLink ? (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-800 px-4 py-2 rounded-md text-sm hover:bg-gray-200"
                    >
                      Code
                    </a>
                  ) : (
                    <span className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm opacity-50 cursor-not-allowed">
                      Code
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
