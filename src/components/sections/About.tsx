import { motion } from 'framer-motion';
import { Code, Briefcase, Award, GraduationCap } from 'lucide-react';
import { Section, SectionTitle } from '../ui/Section';
import { Card } from '../ui/Card';

const stats = [
  { icon: Briefcase, label: 'Months Experience', value: '6+' },
  { icon: Code, label: 'Projects Completed', value: '10+' },
  { icon: Award, label: 'Achievements', value: '5+' },
  { icon: GraduationCap, label: 'Current Semester', value: '6th' },
];

export const About = () => {
  return (
    <Section id="about" gradient>
      <SectionTitle subtitle="Get to know more about me">About Me</SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 p-1">
              <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    className="text-8xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    HS
                  </motion.div>
                  <p className="text-gray-400 mt-4">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm a passionate Full Stack Developer currently pursuing BCA (6th Semester) at Avviare
            Education Hub, Noida. With 6 months of industry experience at Aerohyre, I've worked on
            cutting-edge technologies including AI, LLMs, and modern web development.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            During my internship (3 months) at Aerohyre, I proved myself and got promoted to a
            full-time role for another 3 months. I've worked extensively with LLMs, RAG systems,
            extractors, system prompts, and integrated services like Zoom and Razorpay into
            large-scale applications.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            As President of Tech Pioneers IT Club, I lead tech events, hackathons, and workshops,
            managing a community of 200+ students. I'm passionate about building impactful products
            that solve real-world problems.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center" gradient>
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
