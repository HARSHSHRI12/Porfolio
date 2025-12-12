import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero = () => {
  const words = ['Developer', 'AI Enthusiast', 'Problem Solver', 'Tech Leader'];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10" />
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-500/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Harsh Shrivastava
              </span>
            </motion.h1>

            <motion.div
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-8 h-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <AnimatedText words={words} />
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Full Stack Developer with 6 months of industry experience at Aerohyre. Specializing
              in AI, LLMs, and building impactful products. BCA 6th Semester student passionate
              about creating innovative solutions.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Button href="#contact" size="lg">
                <Mail className="w-5 h-5" />
                Get in Touch
              </Button>
              <Button variant="outline" size="lg">
                <Download className="w-5 h-5" />
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
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

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <a href="#about" className="text-purple-600 dark:text-purple-400">
              <ArrowDown className="w-8 h-8" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const AnimatedText = ({ words }: { words: string[] }) => {
  return (
    <div className="inline-block">
      {words.map((word, i) => (
        <motion.span
          key={word}
          className="absolute right-0 left-0 "
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
