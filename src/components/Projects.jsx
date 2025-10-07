import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const ProjectCard = ({ project, index, isDarkMode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ scale: 1.02 }}
    className={`rounded-lg border transition-all hover:shadow-lg ${
      isDarkMode 
        ? 'bg-secondary border-lightSlate/10 hover:border-accent' 
        : 'bg-lightSecondary border-lightMuted/20 hover:border-accent'
    }`}
  >
    <img 
      src={project.image} 
      alt={project.name}
      className="w-full h-48 object-cover rounded-t-lg"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-3">{project.name}</h3>
      <p className="text-lightSlate mb-4 text-sm leading-relaxed">{project.description}</p>
      
      <div className="space-y-3 mb-4">
        {Object.entries(project.technologies).map(([category, techs]) => (
          <div key={category}>
            <h4 className="text-sm font-medium mb-2 capitalize">{category}:</h4>
            <div className="flex flex-wrap gap-2">
              {techs.map((tech, i) => (
                <div key={i} className="flex items-center gap-1 text-xs">
                  <img src={tech.icon} alt={tech.name} className="w-4 h-4" />
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-accent text-sm hover:underline"
      >
        View Project →
      </a>
    </div>
  </motion.div>
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
        
        <div className="grid lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} isDarkMode={isDarkMode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;