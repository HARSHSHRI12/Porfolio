import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';
import { Section, SectionTitle } from '../ui/Section';
import { Card } from '../ui/Card';

const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Aerohyre',
    duration: '6 months (3 months internship + 3 months full-time)',
    location: 'Remote',
    description:
      'Started as an intern and got promoted to full-time role. Worked on cutting-edge AI and microservices.',
    achievements: [
      'Developed microservices architecture with PostgreSQL',
      'Integrated LLM systems for advanced AI features',
      'Implemented Zoom and Razorpay integrations',
      'Built complex frontend systems with React and TypeScript',
      'Worked on RAG systems and extractors',
      'Developed large-scale backend APIs',
    ],
    color: 'from-purple-500 to-blue-500',
  },
  {
    title: 'President',
    company: 'Tech Pioneers IT Club',
    duration: 'Current',
    location: 'Noida',
    description: 'Leading technical community and organizing tech events',
    achievements: [
      'Manage 200+ students tech community',
      'Organize hackathons and workshops',
      'Lead tech events and competitions',
      'Mentor junior developers',
      'Promote innovation and learning',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Web Development Intern',
    company: 'CodSoft',
    duration: '1 month',
    location: 'Remote',
    description: 'Worked on web development projects and learned industry practices',
    achievements: [
      'Built responsive web applications',
      'Learned modern web development practices',
      'Collaborated with team members',
    ],
    color: 'from-green-500 to-teal-500',
  },
  {
    title: 'Web Development Intern',
    company: 'NullClass',
    duration: '2 months',
    location: 'Remote',
    description: 'Enhanced web development skills and worked on real projects',
    achievements: [
      'Developed full-stack applications',
      'Improved problem-solving skills',
      'Gained experience with various frameworks',
    ],
    color: 'from-orange-500 to-red-500',
  },
];

export const Experience = () => {
  return (
    <Section id="experience">
      <SectionTitle subtitle="My professional journey and roles">Work Experience</SectionTitle>

      <div className="relative">
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500" />

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="hidden md:block md:w-1/2" />

              <div className="absolute left-8 md:left-1/2 w-6 h-6 -ml-3 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 border-4 border-white dark:border-gray-900 shadow-lg z-10" />

              <div className="w-full md:w-1/2 pl-20 md:pl-0 md:px-8">
                <Card gradient>
                  <div
                    className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${exp.color} text-white text-sm font-semibold mb-3`}
                  >
                    <Briefcase className="w-4 h-4 inline mr-1" />
                    {exp.company}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>

                  <div className="flex flex-wrap gap-4 mb-3 text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold">
                      <Award className="w-4 h-4" />
                      Key Achievements
                    </div>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2"
                        >
                          <span className="text-purple-600 dark:text-purple-400 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
