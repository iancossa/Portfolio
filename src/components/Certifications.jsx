import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../constants';

const CertificationCard = ({ cert, index, isDarkMode }) => (
  <motion.a
    href={cert.url}
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
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold">{cert.title}</h3>
      <div className="w-16 h-12 bg-white rounded-lg flex items-center justify-center p-2">
        <img 
          src={cert.logo} 
          alt={cert.provider}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
    {cert.code && (
      <p className="text-sm text-lightSlate font-mono">
        Code: {cert.code}
      </p>
    )}
    <div className="mt-4 text-accent text-sm">
      View Certificate →
    </div>
  </motion.a>
);

const Certifications = ({ isDarkMode }) => {
  return (
    <section className="py-20 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          <span className="text-accent">Certifications</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <CertificationCard key={index} cert={cert} index={index} isDarkMode={isDarkMode} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;