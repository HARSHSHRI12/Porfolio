import { motion } from 'framer-motion';
import { Code, Database, Brain, Rocket } from 'lucide-react';
import { Section, SectionTitle } from '../ui/Section';
import { Card } from '../ui/Card';

const timeline = [
  {
    year: '2023',
    title: 'Started BCA & Web Development',
    icon: Code,
    description: 'Began computer science journey, learned HTML, CSS, JavaScript',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    year: '2024',
    title: 'Internships & Full Stack',
    icon: Database,
    description: 'Completed multiple internships, mastered MERN stack and backend technologies',
    color: 'from-purple-500 to-pink-500',
  },
  {
    year: '2024',
    title: 'AI & LLMs Expertise',
    icon: Brain,
    description: 'Worked with LLMs, RAG systems, LangChain at Aerohyre',
    color: 'from-orange-500 to-red-500',
  },
  {
    year: '2025',
    title: 'Tech Leadership',
    icon: Rocket,
    description: 'Leading Tech Pioneers, building innovative AI projects',
    color: 'from-green-500 to-teal-500',
  },
];

export const TechTimeline = () => {
  return (
    <Section id="timeline" gradient>
      <SectionTitle subtitle="My technology learning journey">Technology Timeline</SectionTitle>

      <div className="max-w-5xl mx-auto">
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 hidden md:block" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="flex-1">
                  <Card gradient>
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 bg-gradient-to-br ${item.color} rounded-lg text-white shadow-lg`}
                      >
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-purple-600 dark:text-purple-400 mb-1">
                          {item.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="hidden md:block w-8 h-8 rounded-full bg-white dark:bg-gray-900 border-4 border-purple-500 shadow-lg z-10" />

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
