import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';

const Hero = ({ isDarkMode }) => {
  return (
    <section className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-accent to-red bg-clip-text text-transparent">
                {PERSONAL_INFO.name}
              </span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-lightSlate mb-6"
            >
              {PERSONAL_INFO.title} • {PERSONAL_INFO.status}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-lightSlate leading-relaxed mb-8"
            >
              {PERSONAL_INFO.bio}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-4"
            >
              <a 
                href="mailto:ianrafaelelias@gmail.com"
                className={`px-6 py-3 bg-accent font-semibold rounded-lg hover:bg-red transition-colors ${
                isDarkMode ? 'text-primary' : 'text-white'
              }`}
              >
                Get In Touch
              </a>
              <a 
                href="#skills"
                className={`px-6 py-3 border border-accent text-accent font-semibold rounded-lg transition-colors ${
                isDarkMode 
                  ? 'hover:bg-accent hover:text-primary' 
                  : 'hover:bg-accent hover:text-white'
              }`}
              >
                View Skills
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <img
              src="/IMG_3373.jpg"
              alt="Ian Cossa"
              className="w-80 h-80 object-cover rounded-2xl shadow-2xl border-4 border-secondary"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;