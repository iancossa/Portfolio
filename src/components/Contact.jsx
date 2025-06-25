import { motion } from 'framer-motion';
import { SOCIAL_LINKS, CONTACT_INFO } from '../constants';

const SocialLink = ({ href, icon, label, subtitle, delay, isDarkMode }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ scale: 1.1 }}
    className={`flex items-center gap-4 p-4 rounded-lg border transition-all group hover:shadow-lg ${
      isDarkMode 
        ? 'bg-secondary border-lightSlate/10 hover:border-accent' 
        : 'bg-lightSecondary border-lightMuted/20 hover:border-accent'
    }`}
  >
    <div className="text-2xl">{icon}</div>
    <div>
      <h3 className="font-semibold group-hover:text-accent transition-colors">{label}</h3>
      <p className={`text-sm ${
        isDarkMode ? 'text-lightSlate' : 'text-lightMuted'
      }`}>{subtitle}</p>
    </div>
  </motion.a>
);

const Contact = ({ isDarkMode }) => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-8"
        >
          Let's <span className="text-accent">Connect</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-lg mb-12 text-center ${
            isDarkMode ? 'text-lightSlate' : 'text-lightMuted'
          }`}
        >
          Ready to collaborate on your next project? Let's build something amazing together.
        </motion.p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <SocialLink
            href={`mailto:${CONTACT_INFO.email}`}
            icon="✉️"
            label="Email"
            subtitle={CONTACT_INFO.email}
            delay={0.1}
            isDarkMode={isDarkMode}
          />
          <SocialLink
            href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`}
            icon="📱"
            label="WhatsApp"
            subtitle={CONTACT_INFO.whatsapp}
            delay={0.2}
            isDarkMode={isDarkMode}
          />
          <SocialLink
            href={`tel:${CONTACT_INFO.phone}`}
            icon="📞"
            label="Phone"
            subtitle={CONTACT_INFO.phone}
            delay={0.3}
            isDarkMode={isDarkMode}
          />
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <SocialLink
            href={SOCIAL_LINKS.linkedin}
            icon="💼"
            label="LinkedIn"
            subtitle="Professional Profile"
            delay={0.4}
            isDarkMode={isDarkMode}
          />
          <SocialLink
            href={SOCIAL_LINKS.github}
            icon="🚀"
            label="GitHub"
            subtitle="Code Repository"
            delay={0.5}
            isDarkMode={isDarkMode}
          />
          <SocialLink
            href={SOCIAL_LINKS.leetcode}
            icon="⚡"
            label="LeetCode"
            subtitle="Coding Practice"
            delay={0.6}
            isDarkMode={isDarkMode}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;