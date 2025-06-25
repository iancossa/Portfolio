import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const SkillCategory = ({ title, skills, delay, isDarkMode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className={`p-6 rounded-lg border transition-colors ${
      isDarkMode 
        ? 'bg-secondary border-lightSlate/10 hover:border-accent/30' 
        : 'bg-lightSecondary border-lightMuted/20 hover:border-accent/50'
    }`}
  >
    <h3 className="text-xl font-semibold mb-4 text-accent">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className={`px-3 py-1 text-sm rounded-full border transition-colors flex items-center gap-2 ${
            isDarkMode 
              ? 'bg-primary border-lightSlate/20 hover:border-accent hover:text-accent' 
              : 'bg-white border-lightMuted/30 hover:border-accent hover:text-accent'
          }`}
        >
          <img 
            src={skill.icon} 
            alt={skill.name}
            className="w-4 h-4 object-contain"
          />
          {skill.name}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = ({ isDarkMode }) => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Technical <span className="text-accent">Skills</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory title="Frontend" skills={SKILLS.frontend} delay={0.1} isDarkMode={isDarkMode} />
          <SkillCategory title="Backend" skills={SKILLS.backend} delay={0.2} isDarkMode={isDarkMode} />
          <SkillCategory title="Languages" skills={SKILLS.languages} delay={0.3} isDarkMode={isDarkMode} />
          <SkillCategory title="Cloud & DevOps" skills={SKILLS.cloud} delay={0.4} isDarkMode={isDarkMode} />
          <SkillCategory title="Authentication" skills={SKILLS.auth} delay={0.5} isDarkMode={isDarkMode} />
          <SkillCategory title="AI & ML" skills={SKILLS.emerging} delay={0.6} isDarkMode={isDarkMode} />
        </div>
      </div>
    </section>
  );
};

export default Skills;