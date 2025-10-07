import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const ProjectCard = ({ project, index, isDarkMode }) => (
  <motion.a
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ scale: 1.05 }}
    className={`block p-6 rounded-lg border transition-all hover:shadow-lg ${
      isDarkMode 
        ? 'bg-secondary border-lightSlate/10 hover:border-accent' 
        : 'bg-lightSecondary border-lightMuted/20 hover:border-accent'
    }`}
  >
    <h3 className="text-xl font-semibold mb-4">{project.name}</h3>
    <p className="text-lightSlate mb-4 leading-relaxed">{project.description}</p>
    <div className="text-accent text-sm">
      View Project →
    </div>
  </motion.a>
);

const Projects = ({ isDarkMode }) => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          <span className="text-accent">Projects</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} isDarkMode={isDarkMode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;