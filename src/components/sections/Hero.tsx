import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail, Code } from 'lucide-react';
import { Button } from '../ui/Button';
import { useState } from 'react';
import { Modal } from '../ui/Modal';

export const Hero = () => {
  const isBrowser = typeof window !== 'undefined';
  const words = ['Frontend Architect', 'AI Enthusiast', 'Problem Solver', 'Daily DSA Practitioner'];
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
   <section
  id="home"
  className="min-h-[90vh] flex items-center justify-center relative overflow-hidden pt-20 pb-0"
>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10" />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500/30 rounded-full"
            initial={{
              x: Math.random() * (isBrowser ? window.innerWidth : 1024),
              y: Math.random() * (isBrowser ? window.innerHeight : 768),
            }}
            animate={{
              y: [null, Math.random() * (isBrowser ? window.innerHeight : 768)],
              x: [null, Math.random() * (isBrowser ? window.innerWidth : 1024)],
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Name with shimmer gradient */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent animate-pulse">
                Harsh Shrivastava
              </span>
            </motion.h1>

            {/* Animated tagline */}
            <motion.div
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-4 h-12 sm:h-16 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <AnimatedText words={words} />
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Full Stack Developer with 6 months of industry experience at Aerohyre. Specializing
              in AI, LLMs, and building impactful products. BCA 6th Semester student passionate
              about creating innovative solutions.
            </motion.p>

            {/* DSA Progress Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-full shadow-lg mb-12"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Code className="w-5 h-5" />
              <span className="font-medium">31+ LeetCode Problems Solved • Daily DSA Practice</span>
            </motion.div>

            {/* Buttons */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <Button href="#contact" size="lg">
                <Mail className="w-5 h-5" />
                Get in Touch
              </Button>
              <Button variant="outline" size="lg" onClick={() => setIsModalOpen(true)}>
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center justify-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
            >
              <SocialLink href="https://github.com/HARSHSHRI12" icon={Github} label="GitHub" />
              <SocialLink
                href="https://www.linkedin.com/in/harsh-shrivastava-737229299/"
                icon={Linkedin}
                label="LinkedIn"
              />
              <SocialLink href="mailto:hshrivastava559@gmail.com" icon={Mail} label="Email" />
            </motion.div>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            className="absolute bottom-18 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <a href="#about" className="text-purple-600 dark:text-purple-400">
              <ArrowDown className="w-8 h-8" />
            </a>
          </motion.div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Redirecting to LinkedIn"
      >
        <div className="text-center">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                You are being redirected to my LinkedIn profile, where you can find my resume.
            </p>
            <Button
                onClick={() => {
                    window.open('https://www.linkedin.com/in/harsh-shrivastava-737229299/', '_blank');
                    setIsModalOpen(false);
                }}
            >
                OK
            </Button>
        </div>
      </Modal>
    </section>
  );  
};

const AnimatedText = ({ words }: { words: string[] }) => {
  return (
  <div className="relative flex items-center justify-center whitespace-nowrap">
  {words.map((word, i) => (
    <motion.span
      key={word}
      className="absolute"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -20] }}
      transition={{
        duration: 4,
        delay: i * 4,
        repeat: Infinity,
        repeatDelay: (words.length - 1) * 4,
      }}
    >
      {word}
    </motion.span>
  ))}
</div>
  );
};

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-purple-600 dark:hover:bg-purple-600 hover:text-white transition-colors"
    whileHover={{ y: -5, scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    aria-label={label}
  >
    <Icon className="w-6 h-6" />
  </motion.a>
);
