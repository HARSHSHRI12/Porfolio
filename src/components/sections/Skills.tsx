import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Brain,
  Layers,
  GitBranch,
  Terminal,
  ListChecks, // new icon for DSA
} from 'lucide-react';
import { Section, SectionTitle } from '../ui/Section';
import { Card } from '../ui/Card';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Redux Observable', 'SCSS'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Backend',
    icon: Terminal,
    skills: ['Node.js', 'Express', 'FastAPI', 'Python', 'C++', 'Microservices', 'JWT', 'Bcrypt', 'Hashing/Salting'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Database',
    icon: Database,
    skills: ['MongoDB', 'PostgreSQL', 'MySQL'],
    color: 'from-green-500 to-teal-500',
  },
  {
    title: 'AI & ML',
    icon: Brain,
    skills: ['LLMs', 'RAG', 'LangChain', 'Groq Cloud', 'HuggingFace', 'System Prompts'],
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Integrations',
    icon: Layers,
    skills: ['Razorpay', 'Zoom Integration', 'Payment Gateway', 'Third-party APIs'],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'Tools & Others',
    icon: GitBranch,
    skills: ['Git', 'GitHub', 'Bitbucket', 'Jira', 'Slack', 'Responsive Design'],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'DSA & Problem Solving',
    icon: ListChecks,
    skills: [
      'Data Structures',
      'Algorithms',
      'LeetCode (31+ problems solved)',
      'Daily DSA Practice',
      'Problem-Solving Mindset',
    ],
    color: 'from-pink-500 to-red-500',
  },
];

export const Skills = () => {
  return (
    <Section id="skills">
      <SectionTitle subtitle="Technologies and tools I work with">Skills & Expertise</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
          >
            <Card
              gradient
              className="h-full border-2 border-transparent hover:border-purple-500 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-br ${category.color} text-white shadow-lg`}
                >
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1.5 bg-white/50 dark:bg-gray-900/50 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:shadow-md hover:bg-purple-100 dark:hover:bg-purple-900/40 transition-all"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.15, y: -3 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Closing statement */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Card gradient className="inline-block animate-pulse">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Constantly learning and exploring new technologies to build better solutions 🚀
          </p>
        </Card>
      </motion.div>
    </Section>
  );
};